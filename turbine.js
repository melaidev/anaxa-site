// <turbine-rotor> — wireframe compressor/turbine rotor, slowly spinning on its axis.
// Attributes: speed (rad/s), line (hex), dot (hex), dots ("0" to disable)
class TurbineRotor extends HTMLElement {
  connectedCallback() {
    if (this._booted) return;
    this._booted = true;
    this.style.display = 'block';
    this.style.position = this.style.position || 'relative';
    this._boot();
  }
  disconnectedCallback() {
    this._dead = true;
    if (this._ro) this._ro.disconnect();
    if (this._renderer) this._renderer.dispose();
  }
  async _boot() {
    let THREE;
    try {
      THREE = await import('https://esm.sh/three@0.160.0');
    } catch (e) { console.warn('three load failed', e); return; }
    if (this._dead) return;

    const lineCol = new THREE.Color(this.getAttribute('line') || '#171717');
    const dotCol = new THREE.Color(this.getAttribute('dot') || '#000000');
    const wantDots = this.getAttribute('dots') !== '0';
    const speed = parseFloat(this.getAttribute('speed') || '0.28');

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 200);
    camera.position.set(5.5, 3.2, 14);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearAlpha(0);
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
    const cv = renderer.domElement;
    cv.style.cssText = 'display:block;width:100%;height:100%;opacity:0;transition:opacity .9s ease';
    this.appendChild(cv);
    this._renderer = renderer;

    const lineMat = new THREE.LineBasicMaterial({ color: lineCol, transparent: true, opacity: 0.15 });
    const dotMat = new THREE.PointsMaterial({ color: dotCol, size: 0.03, sizeAttenuation: true, transparent: true, opacity: 0.38 });

    const rotor = new THREE.Group();           // spins
    const pivot = new THREE.Group();           // static tilt
    pivot.rotation.set(0.12, -0.42, 0.16);
    pivot.add(rotor);
    scene.add(pivot);

    const add = (geo, parent) => {
      parent.add(new THREE.LineSegments(new THREE.WireframeGeometry(geo), lineMat));
      if (wantDots) parent.add(new THREE.Points(geo, dotMat));
    };

    // shaft
    const shaft = new THREE.CylinderGeometry(0.34, 0.34, 12, 20, 6, true);
    shaft.rotateZ(Math.PI / 2);
    add(shaft, rotor);

    // bearing collars
    [-5.4, 5.4].forEach(x => {
      const c = new THREE.CylinderGeometry(0.6, 0.6, 0.7, 20, 1);
      c.rotateZ(Math.PI / 2); c.translate(x, 0, 0);
      add(c, rotor);
    });

    // stages: compressor (short blades) → turbine (long blades)
    const STAGES = 8;
    for (let i = 0; i < STAGES; i++) {
      const t = i / (STAGES - 1);
      const x = -4.4 + i * 1.15;
      const hubR = 0.95 + t * 0.35;
      const len = 0.75 + Math.pow(t, 1.35) * 2.5;
      const chord = 0.5 + t * 0.55;
      const count = Math.round(30 - t * 12);

      const disc = new THREE.CylinderGeometry(hubR, hubR, 0.34 + t * 0.12, count, 1);
      disc.rotateZ(Math.PI / 2); disc.translate(x, 0, 0);
      add(disc, rotor);

      const stage = new THREE.Group();
      stage.position.x = x;
      for (let b = 0; b < count; b++) {
        const a = (b / count) * Math.PI * 2;
        const arm = new THREE.Group();
        arm.rotation.x = a;
        const blade = new THREE.PlaneGeometry(chord, len, 1, 3);
        blade.translate(0, hubR + len / 2 - 0.05, 0);
        blade.rotateY(0.55 + t * 0.35);
        add(blade, arm);
        stage.add(arm);
      }
      rotor.add(stage);
    }

    // outer casing hoops
    [-5.0, -1.6, 1.9, 5.0].forEach((x, i) => {
      const r = 1.9 + i * 0.55;
      const g = new THREE.TorusGeometry(r, 0.02, 3, 44);
      g.rotateY(Math.PI / 2); g.translate(x, 0, 0);
      const l = new THREE.LineSegments(new THREE.WireframeGeometry(g), new THREE.LineBasicMaterial({ color: lineCol, transparent: true, opacity: 0.09 }));
      rotor.add(l);
    });

    const resize = () => {
      const w = this.clientWidth || 1, h = this.clientHeight || 1;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.fov = w / h < 1 ? 44 : 30;
      camera.updateProjectionMatrix();
    };
    resize();
    this._ro = new ResizeObserver(resize);
    this._ro.observe(this);

    let last = performance.now();
    const loop = (now) => {
      if (this._dead) return;
      const dt = Math.min((now - last) / 1000, 0.05); last = now;
      rotor.rotation.x += speed * dt;
      renderer.render(scene, camera);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
    requestAnimationFrame(() => { cv.style.opacity = '1'; });
  }
}
if (!customElements.get('turbine-rotor')) customElements.define('turbine-rotor', TurbineRotor);
