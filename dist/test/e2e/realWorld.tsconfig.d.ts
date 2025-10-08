export declare const input: {
    allOf: {
        $ref: string;
    }[];
    definitions: {
        compilerOptionsDefinition: {
            properties: {
                compilerOptions: {
                    type: string[];
                    properties: {
                        types: {
                            type: string[];
                            items: {
                                type: string[];
                            };
                        };
                        target: {
                            type: string[];
                        };
                    };
                };
            };
        };
        tsNodeDefinition: {
            properties: {
                'ts-node': {
                    type: string[];
                    properties: {
                        compilerOptions: {
                            type: string[];
                            allOf: {
                                $ref: string;
                            }[];
                            properties: {};
                        };
                    };
                };
            };
        };
    };
};
