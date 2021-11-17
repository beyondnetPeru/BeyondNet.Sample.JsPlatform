"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.Audit = void 0;
var base_valueobject_1 = require("./base.valueobject");
var Audit = /** @class */ (function (_super) {
    __extends(Audit, _super);
    function Audit(props) {
        var _this = _super.call(this, props) || this;
        _this._createdBy = 'unknown';
        _this.Update = function (updatedBy, updatedDate) {
            var props = {
                createdBy: _this._createdBy,
                createdDate: _this._createdDate,
                updatedBy: updatedBy,
                updatedDate: updatedDate,
            };
            return new Audit(__assign({}, props));
        };
        _this._createdBy = props.createdBy;
        _this._createdDate = props.createdDate;
        _this._updatedBy = props.updatedBy;
        _this._updatedDate = props.updatedDate;
        _this._timestamp = +new Date();
        return _this;
    }
    Object.defineProperty(Audit.prototype, "createdBy", {
        get: function () {
            return this._createdBy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Audit.prototype, "createdDate", {
        get: function () {
            return this._createdDate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Audit.prototype, "updatedBy", {
        get: function () {
            var _a;
            return (_a = this._updatedBy) !== null && _a !== void 0 ? _a : undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Audit.prototype, "updatedDate", {
        get: function () {
            var _a;
            return (_a = this._updatedDate) !== null && _a !== void 0 ? _a : undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Audit.prototype, "timestamp", {
        get: function () {
            var _a;
            return (_a = this._timestamp) !== null && _a !== void 0 ? _a : undefined;
        },
        enumerable: false,
        configurable: true
    });
    Audit.Create = function (createdBy, createdDate) {
        var props = { createdBy: createdBy, createdDate: createdDate };
        return new Audit(__assign({}, props));
    };
    return Audit;
}(base_valueobject_1.ValueObject));
exports.Audit = Audit;
//# sourceMappingURL=audit.valueobject.js.map