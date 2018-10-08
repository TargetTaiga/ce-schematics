import {
	Rule,
	chain,
	schematic, SchematicsException,
} from '@angular-devkit/schematics';
import { join } from '@angular-devkit/core';

export default function (options: any): Rule {
	if (!options.path) {
		throw new SchematicsException('Path is required.');
	}

	if (!options.name) {
		throw new SchematicsException('Name is required');
	}

	const childPath: string = join(options.path, 'state');

	return chain([
		schematic('ce-actions', { ...options, path: childPath }),
		schematic('ce-constants', { ...options, path: childPath }),
		schematic('ce-effects', { ...options, path: childPath }),
		schematic('ce-reducer', { ...options, path: childPath }),
		schematic('ce-selectors', { ...options, path: childPath })
	]);
}
