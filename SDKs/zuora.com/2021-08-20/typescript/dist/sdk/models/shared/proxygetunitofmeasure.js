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
exports.ProxyGetUnitOfMeasure = void 0;
var utils_1 = require("../../../internal/utils");
var ProxyGetUnitOfMeasure = /** @class */ (function (_super) {
    __extends(ProxyGetUnitOfMeasure, _super);
    function ProxyGetUnitOfMeasure() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Active" }),
        __metadata("design:type", Boolean)
    ], ProxyGetUnitOfMeasure.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreatedById" }),
        __metadata("design:type", String)
    ], ProxyGetUnitOfMeasure.prototype, "createdById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreatedDate" }),
        __metadata("design:type", Date)
    ], ProxyGetUnitOfMeasure.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DecimalPlaces" }),
        __metadata("design:type", Number)
    ], ProxyGetUnitOfMeasure.prototype, "decimalPlaces", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DisplayedAs" }),
        __metadata("design:type", String)
    ], ProxyGetUnitOfMeasure.prototype, "displayedAs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], ProxyGetUnitOfMeasure.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RoundingMode" }),
        __metadata("design:type", String)
    ], ProxyGetUnitOfMeasure.prototype, "roundingMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UomName" }),
        __metadata("design:type", String)
    ], ProxyGetUnitOfMeasure.prototype, "uomName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UpdatedById" }),
        __metadata("design:type", String)
    ], ProxyGetUnitOfMeasure.prototype, "updatedById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UpdatedDate" }),
        __metadata("design:type", Date)
    ], ProxyGetUnitOfMeasure.prototype, "updatedDate", void 0);
    return ProxyGetUnitOfMeasure;
}(utils_1.SpeakeasyBase));
exports.ProxyGetUnitOfMeasure = ProxyGetUnitOfMeasure;
