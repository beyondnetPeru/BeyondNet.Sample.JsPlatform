/* eslint-disable @typescript-eslint/no-explicit-any */

export class GoogleAuth {
    private static DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];
    private static SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';
    private CLIENT_ID = process.env.VUE_APP_GOOGLE_CLIENT_ID;
    private static API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY;

    private _auth: GoogleAuth | undefined;

    constructor() {
        gapi.load('client:auth2', async () => await this.initClient());
    }

    private async initClient(): Promise<void> {
        await gapi.auth2
            .init({
                client_id: this.CLIENT_ID,
                cookie_policy: 'single_host_origin',
                scope: 'profile email',
            })
            .then((g) => {
                if (g.isSignedIn) {
                    localStorage.setItem('googleCurrentUser', JSON.stringify(g.currentUser));
                }
            });
    }

    GetAuth(): any {
        return localStorage.getItem('googleCurrentUser');
    }
}
