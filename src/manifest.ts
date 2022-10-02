import { UUID } from './util';

class RP {
	static format(): string {
		let jsonver: any = `{
			format_version: 2,
			header: {
				name: 'MyPack',
				description: 'Made with MCBEAddonCreatorJS',
				uuid: ${UUID.v4},
				version: [1, 0, 0],
				min_engine_version: [1, 16, 0],
			},
			modules: [
				{
					type: 'resources',
					uuid: ${UUID.v4},
					version: [1, 0, 0],
				},
			],
		}`
		return jsonver;
	}
}

export { RP };
