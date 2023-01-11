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
exports.PostPaymentMethodResponse = exports.PostPaymentMethodResponseReasons = void 0;
var utils_1 = require("../../../internal/utils");
// PostPaymentMethodResponseReasons
/**
 * Error information. Only applicable if the payment method was not created.
 *
**/
var PostPaymentMethodResponseReasons = /** @class */ (function (_super) {
    __extends(PostPaymentMethodResponseReasons, _super);
    function PostPaymentMethodResponseReasons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostPaymentMethodResponseReasons.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostPaymentMethodResponseReasons.prototype, "message", void 0);
    return PostPaymentMethodResponseReasons;
}(utils_1.SpeakeasyBase));
exports.PostPaymentMethodResponseReasons = PostPaymentMethodResponseReasons;
var PostPaymentMethodResponse = /** @class */ (function (_super) {
    __extends(PostPaymentMethodResponse, _super);
    function PostPaymentMethodResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PostPaymentMethodResponse.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=processId" }),
        __metadata("design:type", String)
    ], PostPaymentMethodResponse.prototype, "processId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reasons", elemType: PostPaymentMethodResponseReasons }),
        __metadata("design:type", Array)
    ], PostPaymentMethodResponse.prototype, "reasons", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], PostPaymentMethodResponse.prototype, "success", void 0);
    return PostPaymentMethodResponse;
}(utils_1.SpeakeasyBase));
exports.PostPaymentMethodResponse = PostPaymentMethodResponse;
