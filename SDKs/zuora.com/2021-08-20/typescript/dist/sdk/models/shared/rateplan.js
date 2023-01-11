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
exports.RatePlan = void 0;
var utils_1 = require("../../../internal/utils");
var RatePlan = /** @class */ (function (_super) {
    __extends(RatePlan, _super);
    function RatePlan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AmendmentId" }),
        __metadata("design:type", String)
    ], RatePlan.prototype, "amendmentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AmendmentSubscriptionRatePlanId" }),
        __metadata("design:type", String)
    ], RatePlan.prototype, "amendmentSubscriptionRatePlanId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AmendmentType" }),
        __metadata("design:type", String)
    ], RatePlan.prototype, "amendmentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreatedById" }),
        __metadata("design:type", String)
    ], RatePlan.prototype, "createdById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreatedDate" }),
        __metadata("design:type", Date)
    ], RatePlan.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], RatePlan.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ProductRatePlanId" }),
        __metadata("design:type", String)
    ], RatePlan.prototype, "productRatePlanId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SubscriptionId" }),
        __metadata("design:type", String)
    ], RatePlan.prototype, "subscriptionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UpdatedById" }),
        __metadata("design:type", String)
    ], RatePlan.prototype, "updatedById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UpdatedDate" }),
        __metadata("design:type", Date)
    ], RatePlan.prototype, "updatedDate", void 0);
    return RatePlan;
}(utils_1.SpeakeasyBase));
exports.RatePlan = RatePlan;
