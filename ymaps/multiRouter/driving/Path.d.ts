namespace ymaps.multiRouter.driving {

    interface Path extends interfaces.IGeoObject {
        model:multiRouter.driving.PathModel;
        properties:ymaps.data.Manager;

        getSegments():GeoObjectCollection;
    }

    // todo maybe this is redundant?
    interface PathPropertiesManager extends data.Manager {
        get(path:"index",              defaultValue?:number                         ):number;
        get(path:"type",               defaultValue?:string                         ):string; // todo determine?
        get(path:"distance",           defaultValue?:PathPropertiesDistance         ):PathPropertiesDistance;
        get(path:"duration",           defaultValue?:PathPropertiesDuration         ):PathPropertiesDuration;
        get(path:"durationInTraffic",  defaultValue?:PathPropertiesDurationInTraffic):PathPropertiesDurationInTraffic;
        get(path:"coordinates",        defaultValue?:number[][]                     ):number[][];
        get(path:"encodedCoordinates", defaultValue?:string                         ):string;
    }

    // todo optional values?
    interface PathPropertiesDistance {
        text :string;
        value:any; // todo determine?
    }
    interface PathPropertiesDuration {
        text :string;
        value:any; // todo determine?
    }
    interface PathPropertiesDurationInTraffic {
        text :string;
        value:any; // todo determine?
    }
}