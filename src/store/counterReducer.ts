

const InitialState = {
    value: 0,
    error: false,
    counterIsActive: false,
    counterMaxValue: Number(localStorage.getItem("maxValue")) || 1,
    counterStartValue: Number(localStorage.getItem("startValue")) || 0,
}
export enum ACTION_TYPES {
    RESET = 'RESET',
    INCREMENT = 'INCREMENT',
    SET_VALUES = 'SET_VALUES',
    UPD_MAX_VALUE = 'UPD_MAX_VALUE',
    UPD_MIN_VALUE = 'UPD_MIN_VALUE',
}

export const counterReducer = (state: InitialStateType = InitialState, action: ActionTypes): InitialStateType => {

    switch (action.type) {

        case ACTION_TYPES.RESET: {
            let copyState = { ...state }
            copyState.value = 0
            return copyState
        };

        case ACTION_TYPES.INCREMENT:
            let newValue = +state.value;
            return {
                ...state,
                value: newValue + 1
            };

        case ACTION_TYPES.UPD_MAX_VALUE: {
            let copyState = { ...state }
            if ((action.value <= state.counterStartValue) || action.value <= 0) {
                copyState.error = true;
                copyState.counterIsActive = false;
            } else copyState.error = false;
            return {
                ...copyState,
                counterMaxValue: action.value,
            }
        };

        case ACTION_TYPES.UPD_MIN_VALUE: {
            let copyState = { ...state }
            if ((action.value >= state.counterMaxValue) || action.value < 0) {
                copyState.error = true;
                copyState.counterIsActive = false;
            } else copyState.error = false;
            return {
                ...copyState,
                counterStartValue: action.value,
            }
        };

        case ACTION_TYPES.SET_VALUES:
            let copyState = { ...state };
            copyState.value = action.startValue;
            localStorage.setItem('maxValue', state.counterMaxValue.toString());
            localStorage.setItem('startValue', state.counterStartValue.toString());
            return {
                ...copyState,
                counterIsActive: true
            };
            
        default:
            return state
    }
}

export const actionCreators = {
    ResetAC: () => ({ type: ACTION_TYPES.RESET } as const),
    IncrementAC: () => ({ type: ACTION_TYPES.INCREMENT } as const),
    UpdMaxValueAC: (value: number) => ({ type: ACTION_TYPES.UPD_MAX_VALUE, value } as const),
    UpdMinValueAC: (value: number) => ({ type: ACTION_TYPES.UPD_MIN_VALUE, value } as const),
    SetValuesAC: (startValue: number) => ({ type: ACTION_TYPES.SET_VALUES, startValue } as const),
}

//types
export type InitialStateType = {
    error: boolean,
    value: number | string,
    counterMaxValue: number,
    counterIsActive: boolean,
    counterStartValue: number,
}

export type ActionTypes =
    | ReturnType<typeof actionCreators.ResetAC>
    | ReturnType<typeof actionCreators.SetValuesAC>
    | ReturnType<typeof actionCreators.IncrementAC>
    | ReturnType<typeof actionCreators.UpdMaxValueAC>
    | ReturnType<typeof actionCreators.UpdMinValueAC>
