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
exports.GetRampMetricsBySubscriptionKeyResponseType = exports.GetRampMetricsBySubscriptionKeyResponseTypeReasons = void 0;
var utils_1 = require("../../../internal/utils");
var rampmetrics_1 = require("./rampmetrics");
var GetRampMetricsBySubscriptionKeyResponseTypeReasons = /** @class */ (function (_super) {
    __extends(GetRampMetricsBySubscriptionKeyResponseTypeReasons, _super);
    function GetRampMetricsBySubscriptionKeyResponseTypeReasons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetRampMetricsBySubscriptionKeyResponseTypeReasons.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetRampMetricsBySubscriptionKeyResponseTypeReasons.prototype, "message", void 0);
    return GetRampMetricsBySubscriptionKeyResponseTypeReasons;
}(utils_1.SpeakeasyBase));
exports.GetRampMetricsBySubscriptionKeyResponseTypeReasons = GetRampMetricsBySubscriptionKeyResponseTypeReasons;
var GetRampMetricsBySubscriptionKeyResponseType = /** @class */ (function (_super) {
    __extends(GetRampMetricsBySubscriptionKeyResponseType, _super);
    function GetRampMetricsBySubscriptionKeyResponseType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=processId" }),
        __metadata("design:type", String)
    ], GetRampMetricsBySubscriptionKeyResponseType.prototype, "processId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rampMetrics" }),
        __metadata("design:type", rampmetrics_1.RampMetrics)
    ], GetRampMetricsBySubscriptionKeyResponseType.prototype, "rampMetrics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reasons", elemType: GetRampMetricsBySubscriptionKeyResponseTypeReasons }),
        __metadata("design:type", Array)
    ], GetRampMetricsBySubscriptionKeyResponseType.prototype, "reasons", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], GetRampMetricsBySubscriptionKeyResponseType.prototype, "success", void 0);
    return GetRampMetricsBySubscriptionKeyResponseType;
}(utils_1.SpeakeasyBase));
exports.GetRampMetricsBySubscriptionKeyResponseType = GetRampMetricsBySubscriptionKeyResponseType;
