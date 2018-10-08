"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
function default_1(options) {
    if (!options.path) {
        throw new schematics_1.SchematicsException('Path is required.');
    }
    if (!options.name) {
        throw new schematics_1.SchematicsException('Name is required');
    }
    const childPath = core_1.join(options.path, 'state');
    return schematics_1.chain([
        schematics_1.schematic('ce-actions', Object.assign({}, options, { path: childPath })),
        schematics_1.schematic('ce-constants', Object.assign({}, options, { path: childPath })),
        schematics_1.schematic('ce-effects', Object.assign({}, options, { path: childPath })),
        schematics_1.schematic('ce-reducer', Object.assign({}, options, { path: childPath })),
        schematics_1.schematic('ce-selectors', Object.assign({}, options, { path: childPath }))
    ]);
}
exports.default = default_1;
//# sourceMappingURL=index.js.map