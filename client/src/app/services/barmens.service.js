import httpService from "./http.service";

const barmnensEndPoint = "barmens/";

const barmensService = {
    get: async () => {
        const { data } = await httpService.get(barmnensEndPoint);
        return data;
    }
};

export default barmensService;
