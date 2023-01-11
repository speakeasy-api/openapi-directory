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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRampMetricsByRampNumberResponseType = exports.GetRampMetricsByRampNumberResponseTypeReasons = void 0;
var utils_1 = require("../../../internal/utils");
var rampmetrics_1 = require("./rampmetrics");
var GetRampMetricsByRampNumberResponseTypeReasons = /** @class */ (function (_super) {
    __extends(GetRampMetricsByRampNumberResponseTypeReasons, _super);
    function GetRampMetricsByRampNumberResponseTypeReasons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetRampMetricsByRampNumberResponseTypeReasons.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetRampMetricsByRampNumberResponseTypeReasons.prototype, "message", void 0);
    return GetRampMetricsByRampNumberResponseTypeReasons;
}(utils_1.SpeakeasyBase));
exports.GetRampMetricsByRampNumberResponseTypeReasons = GetRampMetricsByRampNumberResponseTypeReasons;
var GetRampMetricsByRampNumberResponseType = /** @class */ (function (_super) {
    __extends(GetRampMetricsByRampNumberResponseType, _super);
    function GetRampMetricsByRampNumberResponseType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=processId" }),
        __metadata("design:type", String)
    ], GetRampMetricsByRampNumberResponseType.prototype, "processId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rampMetrics" }),
        __metadata("design:type", rampmetrics_1.RampMetrics)
    ], GetRampMetricsByRampNumberResponseType.prototype, "rampMetrics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reasons", elemType: GetRampMetricsByRampNumberResponseTypeReasons }),
        __metadata("design:type", Array)
    ], GetRampMetricsByRampNumberResponseType.prototype, "reasons", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], GetRampMetricsByRampNumberResponseType.prototype, "success", void 0);
    return GetRampMetricsByRampNumberResponseType;
}(utils_1.SpeakeasyBase));
exports.GetRampMetricsByRampNumberResponseType = GetRampMetricsByRampNumberResponseType;
