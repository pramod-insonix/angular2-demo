
export class UserModel {
    constructor(
    	public userId: number,
		public username: string,
		public password: string,
		public email: string,
        public roleId: number

	) {}
}