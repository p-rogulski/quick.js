import { uglify } from 'rollup-plugin-uglify';

export default function (configDefault) {
    return {
        ...configDefault,
        plugins: [
            ...configDefault.plugins,
            uglify(),
        ]
    }
}