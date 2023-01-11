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
exports.ChargeModelDataOverride = exports.ChargeModelDataOverrideChargeModelConfiguration = void 0;
var utils_1 = require("../../../internal/utils");
var chargetier_1 = require("./chargetier");
var ChargeModelDataOverrideChargeModelConfiguration = /** @class */ (function (_super) {
    __extends(ChargeModelDataOverrideChargeModelConfiguration, _super);
    function ChargeModelDataOverrideChargeModelConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customFieldPerUnitRate" }),
        __metadata("design:type", String)
    ], ChargeModelDataOverrideChargeModelConfiguration.prototype, "customFieldPerUnitRate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customFieldTotalAmount" }),
        __metadata("design:type", String)
    ], ChargeModelDataOverrideChargeModelConfiguration.prototype, "customFieldTotalAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=formula" }),
        __metadata("design:type", String)
    ], ChargeModelDataOverrideChargeModelConfiguration.prototype, "formula", void 0);
    return ChargeModelDataOverrideChargeModelConfiguration;
}(utils_1.SpeakeasyBase));
exports.ChargeModelDataOverrideChargeModelConfiguration = ChargeModelDataOverrideChargeModelConfiguration;
// ChargeModelDataOverride
/**
 * Container for charge model configuration data.
 *
 * **Note**: This field is only available if you have the High Water Mark, Pre-Rated Pricing, or Multi-Attribute Pricing charge models enabled. The charge models are available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information.
 *
**/
var ChargeModelDataOverride = /** @class */ (function (_super) {
    __extends(ChargeModelDataOverride, _super);
    function ChargeModelDataOverride() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeModelConfiguration" }),
        __metadata("design:type", ChargeModelDataOverrideChargeModelConfiguration)
    ], ChargeModelDataOverride.prototype, "chargeModelConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tiers", elemType: chargetier_1.ChargeTier }),
        __metadata("design:type", Array)
    ], ChargeModelDataOverride.prototype, "tiers", void 0);
    return ChargeModelDataOverride;
}(utils_1.SpeakeasyBase));
exports.ChargeModelDataOverride = ChargeModelDataOverride;
