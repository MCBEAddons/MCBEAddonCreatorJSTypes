import { UUID } from '../dist/index.mjs';

test('UUID#nil method', () => {
	expect(UUID.nil()).toBe(
		`00000000-0000-0000-0000-000000000000`
	);
});
