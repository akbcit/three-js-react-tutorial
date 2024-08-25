    // src/utils/materialUtils.js

    import * as THREE from 'three';

    /**
     * Creates a material or array of materials with various options.
     * @param {string|Array|Object} materialOption - Can be a string (color), array (colors), or an object defining the material type and its options.
     * @param {string} [defaultColor="#ffffff"] - The default color if materialOption is not specified or is a string.
     * @returns {THREE.Material|Array<THREE.Material>} - The material or array of materials for any geometry.
     */
    export const createMaterial = (materialOption = "#ffffff", defaultColor = "#ffffff") => {
    if (Array.isArray(materialOption)) {
        // Create an array of materials for each face
        return materialOption.map(color => new THREE.MeshPhongMaterial({ color }));
    } else if (typeof materialOption === 'object' && materialOption.type) {
        // Create a material based on the provided type and options
        const { type, options = {} } = materialOption;

        // Ensure default color is applied if not specified
        if (!options.color && defaultColor) {
        options.color = defaultColor;
        }

        switch (type) {
        case 'MeshBasicMaterial':
            return new THREE.MeshBasicMaterial({ ...options });
        case 'MeshStandardMaterial':
            return new THREE.MeshStandardMaterial({ metalness: 0.5, roughness: 0.5, ...options });
        case 'MeshPhysicalMaterial':
            return new THREE.MeshPhysicalMaterial({ metalness: 0.5, roughness: 0.5, clearcoat: 0, ...options });
        case 'MeshLambertMaterial':
            return new THREE.MeshLambertMaterial({ ...options });
        case 'MeshPhongMaterial':
            return new THREE.MeshPhongMaterial({ shininess: 30, ...options });
        case 'MeshToonMaterial':
            return new THREE.MeshToonMaterial({ ...options });
        case 'MeshNormalMaterial':
            return new THREE.MeshNormalMaterial({ ...options });
        case 'MeshDepthMaterial':
            return new THREE.MeshDepthMaterial({ ...options });
        case 'MeshDistanceMaterial':
            return new THREE.MeshDistanceMaterial({ ...options });
        case 'MeshMatcapMaterial':
            return new THREE.MeshMatcapMaterial({ ...options });
        case 'PointsMaterial':
            return new THREE.PointsMaterial({ size: 1, sizeAttenuation: true, ...options });
        case 'LineBasicMaterial':
            return new THREE.LineBasicMaterial({ ...options });
        case 'LineDashedMaterial':
            return new THREE.LineDashedMaterial({ ...options });
        case 'SpriteMaterial':
            return new THREE.SpriteMaterial({ ...options });
        default:
            console.warn(`Unknown material type: ${type}. Falling back to MeshPhongMaterial.`);
            return new THREE.MeshPhongMaterial(options);
        }
    } else {
        // Create a single material for all faces
        return new THREE.MeshPhongMaterial({ color: materialOption || defaultColor });
    }
    };
