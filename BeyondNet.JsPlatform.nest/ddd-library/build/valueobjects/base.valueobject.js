"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueObject = void 0;
var ValueObject = /** @class */ (function () {
    function ValueObject(props) {
        var _this = this;
        this.props = props;
        this.equals = function (obj) {
            if (obj === null || obj === undefined) {
                return false;
            }
            if (obj.props === undefined) {
                return false;
            }
            return JSON.stringify(_this.props) === JSON.stringify(obj.props);
        };
        var baseProps = __assign({}, props);
        this.props = baseProps;
    }
    return ValueObject;
}());
exports.ValueObject = ValueObject;
//# sourceMappingURL=base.valueobject.js.map