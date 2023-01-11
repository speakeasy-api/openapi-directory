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
exports.DerivedHoldingsSummary = void 0;
var utils_1 = require("../../../internal/utils");
var derivedholdingsaccount_1 = require("./derivedholdingsaccount");
var derivedholding_1 = require("./derivedholding");
var money_1 = require("./money");
var DerivedHoldingsSummary = /** @class */ (function (_super) {
    __extends(DerivedHoldingsSummary, _super);
    function DerivedHoldingsSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account", elemType: derivedholdingsaccount_1.DerivedHoldingsAccount }),
        __metadata("design:type", Array)
    ], DerivedHoldingsSummary.prototype, "account", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=classificationType" }),
        __metadata("design:type", String)
    ], DerivedHoldingsSummary.prototype, "classificationType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=classificationValue" }),
        __metadata("design:type", String)
    ], DerivedHoldingsSummary.prototype, "classificationValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=holding", elemType: derivedholding_1.DerivedHolding }),
        __metadata("design:type", Array)
    ], DerivedHoldingsSummary.prototype, "holding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", money_1.Money)
    ], DerivedHoldingsSummary.prototype, "value", void 0);
    return DerivedHoldingsSummary;
}(utils_1.SpeakeasyBase));
exports.DerivedHoldingsSummary = DerivedHoldingsSummary;
