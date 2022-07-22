import { RepositoryYoutubeVideo } from '@/api/youtube';
import { MockYoutube } from './mocks';

jest.mock('inversify');

jest.mock('axios', () => ({
    get: () => {
        return {
            data: { items: MockYoutube },
        };
    },
}));

describe('API Youtube', () => {
    const buildApi = () => new RepositoryYoutubeVideo();

    it('should return a valid mock data from API', async () => {
        const api = buildApi();

        const videoList = await api.fetch('foo');

        expect(videoList.length).toBeGreaterThan(0);
    });

    it('should return an error for invalid parameters', async () => {
        const api = buildApi();

        const expectedValue = 'Parameter value cannot be null or empty. Searchterm: ';

        try {
            await api.fetch('');
        } catch (err) {
            const result = (err as Error).message;
            expect(result).toEqual(expectedValue);
        }
    });
});
