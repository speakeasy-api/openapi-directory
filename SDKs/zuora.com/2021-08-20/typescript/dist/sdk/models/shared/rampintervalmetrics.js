"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.RampIntervalMetrics = void 0;
var utils_1 = require("../../../internal/utils");
var rampintervalchargemetrics_1 = require("./rampintervalchargemetrics");
var class_transformer_1 = require("class-transformer");
var RampIntervalMetrics = /** @class */ (function (_super) {
    __extends(RampIntervalMetrics, _super);
    function RampIntervalMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "description" }),
        __metadata("design:type", String)
    ], RampIntervalMetrics.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "discountTcb" }),
        __metadata("design:type", Number)
    ], RampIntervalMetrics.prototype, "discountTcb", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "discountTcv" }),
        __metadata("design:type", Number)
    ], RampIntervalMetrics.prototype, "discountTcv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "endDate" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], RampIntervalMetrics.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "grossTcb" }),
        __metadata("design:type", Number)
    ], RampIntervalMetrics.prototype, "grossTcb", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "grossTcv" }),
        __metadata("design:type", Number)
    ], RampIntervalMetrics.prototype, "grossTcv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: rampintervalchargemetrics_1.RampIntervalChargeMetrics }),
        (0, class_transformer_1.Expose)({ name: "intervalMetrics" }),
        (0, class_transformer_1.Type)(function () { return rampintervalchargemetrics_1.RampIntervalChargeMetrics; }),
        __metadata("design:type", Array)
    ], RampIntervalMetrics.prototype, "intervalMetrics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], RampIntervalMetrics.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "netTcb" }),
        __metadata("design:type", Number)
    ], RampIntervalMetrics.prototype, "netTcb", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "netTcv" }),
        __metadata("design:type", Number)
    ], RampIntervalMetrics.prototype, "netTcv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "startDate" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], RampIntervalMetrics.prototype, "startDate", void 0);
    return RampIntervalMetrics;
}(utils_1.SpeakeasyBase));
exports.RampIntervalMetrics = RampIntervalMetrics;
