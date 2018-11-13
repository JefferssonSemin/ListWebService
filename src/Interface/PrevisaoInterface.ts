interface PrevisaoInterface {
    name: string;
    weather: {
        description: string;
    }[];
    main: {
        temp: number;
    };
}