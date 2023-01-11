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
exports.OpeningBalances = void 0;
var utils_1 = require("../../../internal/utils");
var deductionline_1 = require("./deductionline");
var earningsline_1 = require("./earningsline");
var leaveline_1 = require("./leaveline");
var reimbursementline_1 = require("./reimbursementline");
var superline_1 = require("./superline");
var OpeningBalances = /** @class */ (function (_super) {
    __extends(OpeningBalances, _super);
    function OpeningBalances() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DeductionLines", elemType: deductionline_1.DeductionLine }),
        __metadata("design:type", Array)
    ], OpeningBalances.prototype, "deductionLines", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EarningsLines", elemType: earningsline_1.EarningsLine }),
        __metadata("design:type", Array)
    ], OpeningBalances.prototype, "earningsLines", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LeaveLines", elemType: leaveline_1.LeaveLine }),
        __metadata("design:type", Array)
    ], OpeningBalances.prototype, "leaveLines", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OpeningBalanceDate" }),
        __metadata("design:type", String)
    ], OpeningBalances.prototype, "openingBalanceDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ReimbursementLines", elemType: reimbursementline_1.ReimbursementLine }),
        __metadata("design:type", Array)
    ], OpeningBalances.prototype, "reimbursementLines", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SuperLines", elemType: superline_1.SuperLine }),
        __metadata("design:type", Array)
    ], OpeningBalances.prototype, "superLines", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Tax" }),
        __metadata("design:type", String)
    ], OpeningBalances.prototype, "tax", void 0);
    return OpeningBalances;
}(utils_1.SpeakeasyBase));
exports.OpeningBalances = OpeningBalances;
