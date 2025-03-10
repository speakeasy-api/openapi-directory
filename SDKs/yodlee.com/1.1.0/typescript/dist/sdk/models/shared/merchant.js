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
exports.Merchant = exports.MerchantSourceEnum = void 0;
var utils_1 = require("../../../internal/utils");
var accountaddress_1 = require("./accountaddress");
var contact_1 = require("./contact");
var coordinates_1 = require("./coordinates");
var MerchantSourceEnum;
(function (MerchantSourceEnum) {
    MerchantSourceEnum["Yodlee"] = "YODLEE";
    MerchantSourceEnum["Factual"] = "FACTUAL";
})(MerchantSourceEnum = exports.MerchantSourceEnum || (exports.MerchantSourceEnum = {}));
var Merchant = /** @class */ (function (_super) {
    __extends(Merchant, _super);
    function Merchant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", accountaddress_1.AccountAddress)
    ], Merchant.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categoryLabel" }),
        __metadata("design:type", Array)
    ], Merchant.prototype, "categoryLabel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contact" }),
        __metadata("design:type", contact_1.Contact)
    ], Merchant.prototype, "contact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=coordinates" }),
        __metadata("design:type", coordinates_1.Coordinates)
    ], Merchant.prototype, "coordinates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Merchant.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Merchant.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], Merchant.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=website" }),
        __metadata("design:type", String)
    ], Merchant.prototype, "website", void 0);
    return Merchant;
}(utils_1.SpeakeasyBase));
exports.Merchant = Merchant;
