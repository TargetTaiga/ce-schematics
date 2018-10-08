import {
	Rule,
	apply,
	mergeWith,
	template,
	url, SchematicsException, branchAndMerge, move, chain,
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';


export default function (options: any): Rule {
	return () => {
		if (!options.path) {
			throw new SchematicsException('Path is required.');
		}

		if (!options.name) {
			throw new SchematicsException('Name is required');
		}

		const templateSource = apply(url('./files'), [
			template({
				...strings,
				...options,
			}),
			move(options.path),
		]);

		return chain([branchAndMerge(mergeWith(templateSource))]);
	}
}
