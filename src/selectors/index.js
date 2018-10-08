"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
function default_1(options) {
    return () => {
        if (!options.path) {
            throw new schematics_1.SchematicsException('Path is required.');
        }
        if (!options.name) {
            throw new schematics_1.SchematicsException('Name is required');
        }
        const templateSource = schematics_1.apply(schematics_1.url('./files'), [
            schematics_1.template(Object.assign({}, core_1.strings, options)),
            schematics_1.move(options.path)
        ]);
        return schematics_1.chain([schematics_1.branchAndMerge(schematics_1.mergeWith(templateSource))]);
    };
}
exports.default = default_1;
//# sourceMappingURL=index.js.map