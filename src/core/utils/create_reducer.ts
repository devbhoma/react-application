export function createReducer( val: any, cb: { [x: string]: (a0: any, a1: any) => any; }) {
    return (state = val, opts: { type: string | number; }) => {
        if (opts && opts.type && cb.hasOwnProperty(opts.type)) {
            return cb[opts.type](state, opts);
        }
        return state;
    };
}