import { UUID } from './util';

interface ManifestOptions {
	name?: string | 'MyPack';
	description?: string;
	version?: number[] | [1, 0, 0];
}

interface RPOptions extends ManifestOptions {
	description?: string | 'RP made with MCBEAddonCreatorJS';
}

class RP {
	static format(options: RPOptions): string {
		const json = `{
			format_version: 2,
			header: {
				name: '${options.name || 'MyPack'}',
				description: '${options.description || 'RP made with MCBEAddonCreatorJS'}',
				uuid: ${UUID.v4},
				version: ${options.version || [1, 0, 0]},
				min_engine_version: [1, 16, 0],
			},
			modules: [
				{
					type: 'resources',
					uuid: ${UUID.v4},
					version: ${options.version || [1, 0, 0]},
				},
			],
		}`;
		return json;
	}
}

export { RP };
