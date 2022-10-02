import { v4, NIL } from 'uuid';

class UUID {
	static v4(): string {
		return v4;
	}
	static nil(): string {
		return NIL;
	}
}

export { UUID };
