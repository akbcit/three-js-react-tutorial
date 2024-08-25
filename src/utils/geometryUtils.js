  // src/utils/geometryUtils.js

  import * as THREE from 'three';

  /**
   * Creates a cuboid geometry with optional rounded edges.
   * @param {number} width - The width of the cuboid.
   * @param {number} height - The height of the cuboid.
   * @param {number} depth - The depth of the cuboid.
   * @param {Object} options - Additional options such as borderRadius and bevelSegments.
   * @param {number} [options.borderRadius=0] - The radius of the rounded edges. Set to 0 for a regular cuboid.
   * @param {number} [options.bevelSegments=4] - The number of bevel segments for smoothness. Applicable only if borderRadius > 0.
   * @returns {THREE.Geometry} - The geometry of the cuboid.
   */
  export const createCuboidGeometry = (width, height, depth, options = {}) => {
    const { borderRadius = 0, bevelSegments = 4 } = options;

    if (borderRadius > 0) {
      const shape = new THREE.Shape();

      const x = -width / 2;
      const y = -height / 2;
      const radius = Math.min(borderRadius, width / 2, height / 2); // Ensure radius doesn't exceed dimensions

      shape.moveTo(x + radius, y);
      shape.lineTo(x + width - radius, y);
      shape.quadraticCurveTo(x + width, y, x + width, y + radius);
      shape.lineTo(x + width, y + height - radius);
      shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      shape.lineTo(x + radius, y + height);
      shape.quadraticCurveTo(x, y + height, x, y + height - radius);
      shape.lineTo(x, y + radius);
      shape.quadraticCurveTo(x, y, x + radius, y);

      const extrudeSettings = {
        depth: depth,
        bevelEnabled: true,
        bevelSegments: bevelSegments,
        steps: 1,
        bevelSize: radius,
        bevelThickness: radius,
        curveSegments: bevelSegments,
      };

      return new THREE.ExtrudeGeometry(shape, extrudeSettings);
    } else {
      return new THREE.BoxGeometry(width, height, depth);
    }
  };

  /**
   * Creates a sphere geometry with additional options.
   * @param {number} radius - The radius of the sphere.
   * @param {Object} options - Additional options such as widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength.
   * @param {number} [options.widthSegments=32] - The number of horizontal segments.
   * @param {number} [options.heightSegments=32] - The number of vertical segments.
   * @param {number} [options.phiStart=0] - The starting angle for horizontal sweep.
   * @param {number} [options.phiLength=Math.PI * 2] - The length of the horizontal sweep in radians.
   * @param {number} [options.thetaStart=0] - The starting angle for vertical sweep.
   * @param {number} [options.thetaLength=Math.PI] - The length of the vertical sweep in radians.
   * @returns {THREE.SphereGeometry} - The geometry of the sphere.
   */
  export const createSphereGeometry = (radius, options = {}) => {
    const {
      widthSegments = 32,
      heightSegments = 32,
      phiStart = 0,
      phiLength = Math.PI * 2,
      thetaStart = 0,
      thetaLength = Math.PI,
    } = options;

    return new THREE.SphereGeometry(
      radius,
      widthSegments,
      heightSegments,
      phiStart,
      phiLength,
      thetaStart,
      thetaLength
    );
  };

  /**
   * Creates a cylinder geometry with additional options.
   * @param {number} radiusTop - The radius of the top of the cylinder.
   * @param {number} radiusBottom - The radius of the bottom of the cylinder.
   * @param {number} height - The height of the cylinder.
   * @param {Object} options - Additional options such as radialSegments, heightSegments, openEnded, thetaStart, thetaLength.
   * @param {number} [options.radialSegments=32] - The number of segmented faces around the circumference of the cylinder.
   * @param {number} [options.heightSegments=1] - The number of rows of faces along the height of the cylinder.
   * @param {boolean} [options.openEnded=false] - A Boolean indicating whether the ends of the cylinder are open or capped.
   * @param {number} [options.thetaStart=0] - The starting angle for sweep in radians.
   * @param {number} [options.thetaLength=Math.PI * 2] - The length of the sweep in radians.
   * @returns {THREE.CylinderGeometry} - The geometry of the cylinder.
   */
  export const createCylinderGeometry = (radiusTop, radiusBottom, height, options = {}) => {
    const {
      radialSegments = 32,
      heightSegments = 1,
      openEnded = false,
      thetaStart = 0,
      thetaLength = Math.PI * 2,
    } = options;

    return new THREE.CylinderGeometry(
      radiusTop,
      radiusBottom,
      height,
      radialSegments,
      heightSegments,
      openEnded,
      thetaStart,
      thetaLength
    );
  };

  /**
   * Creates a cone geometry with additional options.
   * @param {number} radius - The radius of the base of the cone.
   * @param {number} height - The height of the cone.
   * @param {Object} options - Additional options such as radialSegments, heightSegments, openEnded, thetaStart, thetaLength.
   * @param {number} [options.radialSegments=32] - The number of segmented faces around the circumference of the cone.
   * @param {number} [options.heightSegments=1] - The number of rows of faces along the height of the cone.
   * @param {boolean} [options.openEnded=false] - A Boolean indicating whether the ends of the cone are open or capped.
   * @param {number} [options.thetaStart=0] - The starting angle for sweep in radians.
   * @param {number} [options.thetaLength=Math.PI * 2] - The length of the sweep in radians.
   * @returns {THREE.ConeGeometry} - The geometry of the cone.
   */
  export const createConeGeometry = (radius, height, options = {}) => {
    const {
      radialSegments = 32,
      heightSegments = 1,
      openEnded = false,
      thetaStart = 0,
      thetaLength = Math.PI * 2,
    } = options;

    return new THREE.ConeGeometry(
      radius,
      height,
      radialSegments,
      heightSegments,
      openEnded,
      thetaStart,
      thetaLength
    );
  };

  /**
   * Creates a torus geometry with additional options.
   * @param {number} radius - The radius from the center of the torus to the center of the tube.
   * @param {number} tubeRadius - The radius of the tube.
   * @param {Object} options - Additional options such as radialSegments, tubularSegments, arc.
   * @param {number} [options.radialSegments=16] - The number of radial segments.
   * @param {number} [options.tubularSegments=100] - The number of tubular segments.
   * @param {number} [options.arc=Math.PI * 2] - The central angle of the torus in radians.
   * @returns {THREE.TorusGeometry} - The geometry of the torus.
   */
  export const createTorusGeometry = (radius, tubeRadius, options = {}) => {
    const { radialSegments = 16, tubularSegments = 100, arc = Math.PI * 2 } = options;

    return new THREE.TorusGeometry(radius, tubeRadius, radialSegments, tubularSegments, arc);
  };

  /**
   * Creates a plane geometry with additional options.
   * @param {number} width - The width of the plane.
   * @param {number} height - The height of the plane.
   * @param {Object} options - Additional options such as widthSegments, heightSegments.
   * @param {number} [options.widthSegments=1] - The number of segments along the width.
   * @param {number} [options.heightSegments=1] - The number of segments along the height.
   * @returns {THREE.PlaneGeometry} - The geometry of the plane.
   */
  export const createPlaneGeometry = (width, height, options = {}) => {
    const { widthSegments = 1, heightSegments = 1 } = options;

    return new THREE.PlaneGeometry(width, height, widthSegments, heightSegments);
  };

  /**
   * Creates a circle geometry with additional options.
   * @param {number} radius - The radius of the circle.
   * @param {Object} options - Additional options such as segments, thetaStart, thetaLength.
   * @param {number} [options.segments=32] - The number of segments. A higher number means a smoother circle.
   * @param {number} [options.thetaStart=0] - The starting angle for the arc in radians.
   * @param {number} [options.thetaLength=Math.PI * 2] - The central angle of the arc in radians.
   * @returns {THREE.CircleGeometry} - The geometry of the circle.
   */
  export const createCircleGeometry = (radius, options = {}) => {
    const { segments = 32, thetaStart = 0, thetaLength = Math.PI * 2 } = options;

    return new THREE.CircleGeometry(radius, segments, thetaStart, thetaLength);
  };

  /**
   * Creates a ring geometry with additional options.
   * @param {number} innerRadius - The inner radius of the ring.
   * @param {number} outerRadius - The outer radius of the ring.
   * @param {Object} options - Additional options such as thetaSegments, phiSegments, thetaStart, thetaLength.
   * @param {number} [options.thetaSegments=32] - The number of segments along the thickness of the ring.
   * @param {number} [options.phiSegments=1] - The number of segments along the width of the ring.
   * @param {number} [options.thetaStart=0] - The starting angle for the arc in radians.
   * @param {number} [options.thetaLength=Math.PI * 2] - The central angle of the arc in radians.
   * @returns {THREE.RingGeometry} - The geometry of the ring.
   */
  export const createRingGeometry = (innerRadius, outerRadius, options = {}) => {
    const {
      thetaSegments = 32,
      phiSegments = 1,
      thetaStart = 0,
      thetaLength = Math.PI * 2,
    } = options;

    return new THREE.RingGeometry(innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength);
  };

  /**
   * Creates a tetrahedron geometry with additional options.
   * @param {number} radius - The radius of the tetrahedron.
   * @param {Object} options - Additional options such as detail.
   * @param {number} [options.detail=0] - The level of detail. A higher number means more vertices.
   * @returns {THREE.TetrahedronGeometry} - The geometry of the tetrahedron.
   */
  export const createTetrahedronGeometry = (radius, options = {}) => {
    const { detail = 0 } = options;

    return new THREE.TetrahedronGeometry(radius, detail);
  };

  /**
   * Creates an octahedron geometry with additional options.
   * @param {number} radius - The radius of the octahedron.
   * @param {Object} options - Additional options such as detail.
   * @param {number} [options.detail=0] - The level of detail. A higher number means more vertices.
   * @returns {THREE.OctahedronGeometry} - The geometry of the octahedron.
   */
  export const createOctahedronGeometry = (radius, options = {}) => {
    const { detail = 0 } = options;

    return new THREE.OctahedronGeometry(radius, detail);
  };

  /**
   * Creates an icosahedron geometry with additional options.
   * @param {number} radius - The radius of the icosahedron.
   * @param {Object} options - Additional options such as detail.
   * @param {number} [options.detail=0] - The level of detail. A higher number means more vertices.
   * @returns {THREE.IcosahedronGeometry} - The geometry of the icosahedron.
   */
  export const createIcosahedronGeometry = (radius, options = {}) => {
    const { detail = 0 } = options;

    return new THREE.IcosahedronGeometry(radius, detail);
  };

  /**
   * Creates a dodecahedron geometry with additional options.
   * @param {number} radius - The radius of the dodecahedron.
   * @param {Object} options - Additional options such as detail.
   * @param {number} [options.detail=0] - The level of detail. A higher number means more vertices.
   * @returns {THREE.DodecahedronGeometry} - The geometry of the dodecahedron.
   */
  export const createDodecahedronGeometry = (radius, options = {}) => {
    const { detail = 0 } = options;

    return new THREE.DodecahedronGeometry(radius, detail);
  };

  /**
   * Creates a tube geometry with additional options.
   * @param {THREE.Curve} path - The path that the tube follows.
   * @param {Object} options - Additional options such as tubularSegments, radius, radialSegments, closed.
   * @param {number} [options.tubularSegments=64] - The number of segments along the tube.
   * @param {number} [options.radius=1] - The radius of the tube.
   * @param {number} [options.radialSegments=8] - The number of segmented faces around the circumference of the tube.
   * @param {boolean} [options.closed=false] - Whether the tube is closed or open.
   * @returns {THREE.TubeGeometry} - The geometry of the tube.
   */
  export const createTubeGeometry = (path, options = {}) => {
    const { tubularSegments = 64, radius = 1, radialSegments = 8, closed = false } = options;

    return new THREE.TubeGeometry(path, tubularSegments, radius, radialSegments, closed);
  };

  /**
   * Creates a torus knot geometry with additional options.
   * @param {number} radius - The radius of the torus knot.
   * @param {Object} options - Additional options such as tubeRadius, tubularSegments, radialSegments, p, q.
   * @param {number} [options.tubeRadius=0.4] - The radius of the tube.
   * @param {number} [options.tubularSegments=64] - The number of segments along the tube.
   * @param {number} [options.radialSegments=8] - The number of segments along the radial direction.
   * @param {number} [options.p=2] - The number of times the geometry winds around its axis of rotational symmetry.
   * @param {number} [options.q=3] - The number of times the geometry winds around a circle in the interior of the torus.
   * @returns {THREE.TorusKnotGeometry} - The geometry of the torus knot.
   */
  export const createTorusKnotGeometry = (radius, options = {}) => {
    const { tubeRadius = 0.4, tubularSegments = 64, radialSegments = 8, p = 2, q = 3 } = options;

    return new THREE.TorusKnotGeometry(radius, tubeRadius, tubularSegments, radialSegments, p, q);
  };


  /**
 * Creates a points geometry with vertices defined by an array of vectors.
 * @param {THREE.Vector3[]} vertices - An array of THREE.Vector3 representing the points in space.
 * @param {Object} options - Additional options such as color, size, and sizeAttenuation.
 * @param {string|number} [options.color=0xffffff] - The color of the points.
 * @param {number} [options.size=1] - The size of the points.
 * @param {boolean} [options.sizeAttenuation=true] - Whether the size of the points is attenuated by the camera's depth.
 * @returns {THREE.Points} - The points object that can be added to the scene.
 */
export const createPointsGeometry = (vertices, options = {}) => {
  const { color = 0xffffff, size = 1, sizeAttenuation = true } = options;

  // Create the BufferGeometry to hold the points
  const geometry = new THREE.BufferGeometry().setFromPoints(vertices);

  // Create a PointsMaterial with the provided options
  const material = new THREE.PointsMaterial({
    color,
    size,
    sizeAttenuation,
  });

  // Create the Points object
  const points = new THREE.Points(geometry, material);

  return points;
};