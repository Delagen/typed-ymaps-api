namespace ymaps.control {

    interface ButtonStatic {
        new(parameters:ButtonParameters = defaultButtonParameters):Button;
    }
    interface Button extends interfaces.ICustomizable, interfaces.ISelectableControl {
        data:ymaps.data.Manager;
        state:ymaps.data.Manager;

        getMap():Map;
    }

    interface ButtonParameters {
        data   ?:ButtonParametersData;
        options?:ButtonParametersOptions;
        state  ?:ButtonParametersState;
    }
    interface ButtonParametersData {
        content ?:string;
        iconType?:string;
        image   ?:string;
        title   ?:string;
    }
    interface ButtonParametersOptions {
        float        ?:ymaps.Float;
        floatIndex   ?:number;
        layout       ?:string|interfaces.ISelectableControlLayout; // todo constructor
        maxWidth     ?:number|number[];
        position     ?:ButtonParametersOptionsPosition;
        selectOnClick?:boolean;
        size         ?:ymaps.Size;
        visible      ?:boolean;
    }
    interface ButtonParametersOptionsPosition {
        top   ?:number|string;
        right ?:number|string;
        bottom?:number|string;
        left  ?:number|string;
    }
    interface ButtonParametersState {
        enabled ?:boolean;
        selected?:boolean;
    }

    declare var Button:ButtonStatic;
    declare var defaultButtonParameters:ButtonParameters = {
        options: {
            float        : "right",
            floatIndex   : 0,
            maxWidth     : 50,
            position     : {
                top   : "auto",
                right : "auto",
                bottom: "auto",
                left  : "auto",
            },
            selectOnClick: true,
            size         : "auto",
            visible      : true
        },
        state  : {
            enabled : true,
            selected: false
        }
    };
}