/* eslint-disable */
/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 *
 * Generated from OpenMercato OpenAPI spec using @algolia/n8n-openapi-node
 * Run `npm run generate:openapi` to regenerate.
 *
 * Source: http://localhost:3000/api/docs/openapi
 * Generated: 2026-02-19T17:05:00.813Z
 */

import { INodeProperties } from 'n8n-workflow';

const properties: INodeProperties[] = [
	{
		"displayName": "Resource",
		"name": "resource",
		"type": "options",
		"default": "",
		"description": "Select the resource to work with",
		"options": [
			{
				"name": "Contractors",
				"value": "Contractors",
				"description": "Contractor management for freight operations"
			},
			{
				"name": "FMS Offers",
				"value": "FMS Offers",
				"description": "Freight offers and RFQ management for the FMS module"
			},
			{
				"name": "FMS Locations",
				"value": "FMS Locations",
				"description": "Port and terminal locations management for the FMS module"
			},
			{
				"name": "Fms Products",
				"value": "Fms Products"
			},
			{
				"name": "FMS Documents",
				"value": "FMS Documents",
				"description": "Unified document management with AI-powered OCR extraction, invoice processing, and charge code matching"
			},
			{
				"name": "FMS Projects",
				"value": "FMS Projects",
				"description": "Shipping project management with workflow orchestration"
			},
			{
				"name": "Fms Teams",
				"value": "Fms Teams",
				"description": "Team management with contractor assignments for freight operations"
			},
			{
				"name": "Frc Rfqs",
				"value": "Frc Rfqs",
				"description": "Request for Quote management for 4R Cargo air freight operations"
			},
			{
				"name": "4R Cargo Offers",
				"value": "4R Cargo Offers",
				"description": "Offer management for 4R Cargo air freight operations"
			},
			{
				"name": "4R Cargo Projects",
				"value": "4R Cargo Projects",
				"description": "Project management for 4R Cargo air freight operations"
			},
			{
				"name": "Frc Contractors",
				"value": "Frc Contractors",
				"description": "Contractor management for 4R Cargo operations"
			}
		]
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "GET /contractors/addresses",
				"value": "contractors_get_contractors_addresses",
				"action": "GET /contractors/addresses",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/addresses"
					}
				}
			},
			{
				"name": "POST /contractors/addresses",
				"value": "contractors_post_contractors_addresses",
				"action": "POST /contractors/addresses",
				"description": "Requires features: contractors.edit",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/contractors/addresses"
					}
				}
			},
			{
				"name": "PUT /contractors/addresses",
				"value": "contractors_put_contractors_addresses",
				"action": "PUT /contractors/addresses",
				"description": "Requires features: contractors.edit",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/contractors/addresses"
					}
				}
			},
			{
				"name": "DELETE /contractors/addresses",
				"value": "contractors_delete_contractors_addresses",
				"action": "DELETE /contractors/addresses",
				"description": "Requires features: contractors.edit",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/contractors/addresses"
					}
				}
			},
			{
				"name": "GET /contractors/addresses/table-config",
				"value": "contractors_get_contractors_addresses_table_config",
				"action": "GET /contractors/addresses/table-config",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/addresses/table-config"
					}
				}
			},
			{
				"name": "GET /contractors/bank-accounts",
				"value": "contractors_get_contractors_bank_accounts",
				"action": "GET /contractors/bank-accounts",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/bank-accounts"
					}
				}
			},
			{
				"name": "POST /contractors/bank-accounts",
				"value": "contractors_post_contractors_bank_accounts",
				"action": "POST /contractors/bank-accounts",
				"description": "Requires features: contractors.edit",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/contractors/bank-accounts"
					}
				}
			},
			{
				"name": "PUT /contractors/bank-accounts",
				"value": "contractors_put_contractors_bank_accounts",
				"action": "PUT /contractors/bank-accounts",
				"description": "Requires features: contractors.edit",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/contractors/bank-accounts"
					}
				}
			},
			{
				"name": "DELETE /contractors/bank-accounts",
				"value": "contractors_delete_contractors_bank_accounts",
				"action": "DELETE /contractors/bank-accounts",
				"description": "Requires features: contractors.edit",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/contractors/bank-accounts"
					}
				}
			},
			{
				"name": "GET /contractors/contacts",
				"value": "contractors_get_contractors_contacts",
				"action": "GET /contractors/contacts",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/contacts"
					}
				}
			},
			{
				"name": "POST /contractors/contacts",
				"value": "contractors_post_contractors_contacts",
				"action": "POST /contractors/contacts",
				"description": "Requires features: contractors.edit",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/contractors/contacts"
					}
				}
			},
			{
				"name": "PUT /contractors/contacts",
				"value": "contractors_put_contractors_contacts",
				"action": "PUT /contractors/contacts",
				"description": "Requires features: contractors.edit",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/contractors/contacts"
					}
				}
			},
			{
				"name": "DELETE /contractors/contacts",
				"value": "contractors_delete_contractors_contacts",
				"action": "DELETE /contractors/contacts",
				"description": "Requires features: contractors.edit",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/contractors/contacts"
					}
				}
			},
			{
				"name": "GET /contractors/contacts/table-config",
				"value": "contractors_get_contractors_contacts_table_config",
				"action": "GET /contractors/contacts/table-config",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/contacts/table-config"
					}
				}
			},
			{
				"name": "GET /contractors/contractors",
				"value": "contractors_get_contractors_contractors",
				"action": "GET /contractors/contractors",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/contractors"
					}
				}
			},
			{
				"name": "POST /contractors/contractors",
				"value": "contractors_post_contractors_contractors",
				"action": "POST /contractors/contractors",
				"description": "Requires features: contractors.create",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/contractors/contractors"
					}
				}
			},
			{
				"name": "PUT /contractors/contractors",
				"value": "contractors_put_contractors_contractors",
				"action": "PUT /contractors/contractors",
				"description": "Requires features: contractors.edit",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/contractors/contractors"
					}
				}
			},
			{
				"name": "DELETE /contractors/contractors",
				"value": "contractors_delete_contractors_contractors",
				"action": "DELETE /contractors/contractors",
				"description": "Requires features: contractors.delete",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/contractors/contractors"
					}
				}
			},
			{
				"name": "GET /contractors/credit-limits",
				"value": "contractors_get_contractors_credit_limits",
				"action": "GET /contractors/credit-limits",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/credit-limits"
					}
				}
			},
			{
				"name": "POST /contractors/credit-limits",
				"value": "contractors_post_contractors_credit_limits",
				"action": "POST /contractors/credit-limits",
				"description": "Requires features: contractors.manage_financial",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/contractors/credit-limits"
					}
				}
			},
			{
				"name": "PUT /contractors/credit-limits",
				"value": "contractors_put_contractors_credit_limits",
				"action": "PUT /contractors/credit-limits",
				"description": "Requires features: contractors.manage_financial",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/contractors/credit-limits"
					}
				}
			},
			{
				"name": "DELETE /contractors/credit-limits",
				"value": "contractors_delete_contractors_credit_limits",
				"action": "DELETE /contractors/credit-limits",
				"description": "Requires features: contractors.manage_financial",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/contractors/credit-limits"
					}
				}
			},
			{
				"name": "GET /contractors/offers",
				"value": "contractors_get_contractors_offers",
				"action": "GET /contractors/offers",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/offers"
					}
				}
			},
			{
				"name": "GET /contractors/payment-terms",
				"value": "contractors_get_contractors_payment_terms",
				"action": "GET /contractors/payment-terms",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/payment-terms"
					}
				}
			},
			{
				"name": "POST /contractors/payment-terms",
				"value": "contractors_post_contractors_payment_terms",
				"action": "POST /contractors/payment-terms",
				"description": "Requires features: contractors.manage_financial",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/contractors/payment-terms"
					}
				}
			},
			{
				"name": "PUT /contractors/payment-terms",
				"value": "contractors_put_contractors_payment_terms",
				"action": "PUT /contractors/payment-terms",
				"description": "Requires features: contractors.manage_financial",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/contractors/payment-terms"
					}
				}
			},
			{
				"name": "DELETE /contractors/payment-terms",
				"value": "contractors_delete_contractors_payment_terms",
				"action": "DELETE /contractors/payment-terms",
				"description": "Requires features: contractors.manage_financial",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/contractors/payment-terms"
					}
				}
			},
			{
				"name": "GET /contractors/projects",
				"value": "contractors_get_contractors_projects",
				"action": "GET /contractors/projects",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/projects"
					}
				}
			},
			{
				"name": "GET /contractors/regon-lookup",
				"value": "contractors_get_contractors_regon_lookup",
				"action": "GET /contractors/regon-lookup",
				"description": "Requires features: contractors.create",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/regon-lookup"
					}
				}
			},
			{
				"name": "GET /contractors/role-types",
				"value": "contractors_get_contractors_role_types",
				"action": "GET /contractors/role-types",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/role-types"
					}
				}
			},
			{
				"name": "POST /contractors/role-types",
				"value": "contractors_post_contractors_role_types",
				"action": "POST /contractors/role-types",
				"description": "Requires features: contractors.admin",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/contractors/role-types"
					}
				}
			},
			{
				"name": "PUT /contractors/role-types",
				"value": "contractors_put_contractors_role_types",
				"action": "PUT /contractors/role-types",
				"description": "Requires features: contractors.admin",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/contractors/role-types"
					}
				}
			},
			{
				"name": "DELETE /contractors/role-types",
				"value": "contractors_delete_contractors_role_types",
				"action": "DELETE /contractors/role-types",
				"description": "Requires features: contractors.admin",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/contractors/role-types"
					}
				}
			},
			{
				"name": "GET /contractors/sop-comments",
				"value": "contractors_get_contractors_sop_comments",
				"action": "GET /contractors/sop-comments",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/sop-comments"
					}
				}
			},
			{
				"name": "POST /contractors/sop-comments",
				"value": "contractors_post_contractors_sop_comments",
				"action": "POST /contractors/sop-comments",
				"description": "Requires features: contractors.edit",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/contractors/sop-comments"
					}
				}
			},
			{
				"name": "PUT /contractors/sop-comments",
				"value": "contractors_put_contractors_sop_comments",
				"action": "PUT /contractors/sop-comments",
				"description": "Requires features: contractors.edit",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/contractors/sop-comments"
					}
				}
			},
			{
				"name": "DELETE /contractors/sop-comments",
				"value": "contractors_delete_contractors_sop_comments",
				"action": "DELETE /contractors/sop-comments",
				"description": "Requires features: contractors.edit",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/contractors/sop-comments"
					}
				}
			},
			{
				"name": "GET /contractors/table-config",
				"value": "contractors_get_contractors_table_config",
				"action": "GET /contractors/table-config",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/table-config"
					}
				}
			},
			{
				"name": "GET /contractors/contractors/{id}",
				"value": "contractors_get_contractors_contractors_id",
				"action": "GET /contractors/contractors/{id}",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/contractors/contractors/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /contractors/contractors/{id}",
				"value": "contractors_put_contractors_contractors_id",
				"action": "PUT /contractors/contractors/{id}",
				"description": "Requires features: contractors.edit",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/contractors/contractors/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /contractors/contractors/{id}",
				"value": "contractors_delete_contractors_contractors_id",
				"action": "DELETE /contractors/contractors/{id}",
				"description": "Requires features: contractors.delete",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/contractors/contractors/{{ $parameter.id_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Contractors"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "Fetch pending response offers metrics",
				"value": "fms_offers_get_fms_offers_dashboard_widgets_pending_response_offers",
				"action": "Fetch pending response offers metrics",
				"description": "Returns count, max lag time, and trend for sent offers pending customer response within the scoped tenant/organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_offers/dashboard/widgets/pending-response-offers"
					}
				}
			},
			{
				"name": "Fetch unsent offers metrics",
				"value": "fms_offers_get_fms_offers_dashboard_widgets_unsent_offers",
				"action": "Fetch unsent offers metrics",
				"description": "Returns count, max lag time, and trend for unsent offers within the scoped tenant/organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_offers/dashboard/widgets/unsent-offers"
					}
				}
			},
			{
				"name": "GET /fms_offers/offer-lines",
				"value": "fms_offers_get_fms_offers_offer_lines",
				"action": "GET /fms_offers/offer-lines",
				"description": "Requires features: fms_offers.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_offers/offer-lines"
					}
				}
			},
			{
				"name": "POST /fms_offers/offer-lines",
				"value": "fms_offers_post_fms_offers_offer_lines",
				"action": "POST /fms_offers/offer-lines",
				"description": "Requires features: fms_offers.offers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_offers/offer-lines"
					}
				}
			},
			{
				"name": "GET /fms_offers/offer-lines/table-config",
				"value": "fms_offers_get_fms_offers_offer_lines_table_config",
				"action": "GET /fms_offers/offer-lines/table-config",
				"description": "Requires features: fms_offers.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_offers/offer-lines/table-config"
					}
				}
			},
			{
				"name": "GET /fms_offers/offers",
				"value": "fms_offers_get_fms_offers_offers",
				"action": "GET /fms_offers/offers",
				"description": "Requires features: fms_offers.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_offers/offers"
					}
				}
			},
			{
				"name": "POST /fms_offers/offers",
				"value": "fms_offers_post_fms_offers_offers",
				"action": "POST /fms_offers/offers",
				"description": "Requires features: fms_offers.offers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_offers/offers"
					}
				}
			},
			{
				"name": "POST /fms_offers/offers/version",
				"value": "fms_offers_post_fms_offers_offers_version",
				"action": "POST /fms_offers/offers/version",
				"description": "Requires features: fms_offers.offers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_offers/offers/version"
					}
				}
			},
			{
				"name": "Get RFQ board cards",
				"value": "fms_offers_get_fms_offers_rfq_board",
				"action": "Get RFQ board cards",
				"description": "Returns all RFQs formatted as board cards with assignee info and latest offer details.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_offers/rfq/board"
					}
				}
			},
			{
				"name": "List rfqs",
				"value": "fms_offers_get_fms_offers_rfq",
				"action": "List rfqs",
				"description": "Returns a paginated collection of rfqs scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_offers/rfq"
					}
				}
			},
			{
				"name": "Create rfq",
				"value": "fms_offers_post_fms_offers_rfq",
				"action": "Create rfq",
				"description": "Creates a new RFQ (Request for Quotation) scoped to the authenticated organization.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_offers/rfq"
					}
				}
			},
			{
				"name": "GET /fms_offers/calculations/{id}",
				"value": "fms_offers_get_fms_offers_calculations_id",
				"action": "GET /fms_offers/calculations/{id}",
				"description": "Requires features: fms_offers.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_offers/calculations/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_offers/calculations/{id}",
				"value": "fms_offers_put_fms_offers_calculations_id",
				"action": "PUT /fms_offers/calculations/{id}",
				"description": "Requires features: fms_offers.offers.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_offers/calculations/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "GET /fms_offers/offer-lines/{id}",
				"value": "fms_offers_get_fms_offers_offer_lines_id",
				"action": "GET /fms_offers/offer-lines/{id}",
				"description": "Requires features: fms_offers.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_offers/offer-lines/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_offers/offer-lines/{id}",
				"value": "fms_offers_put_fms_offers_offer_lines_id",
				"action": "PUT /fms_offers/offer-lines/{id}",
				"description": "Requires features: fms_offers.offers.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_offers/offer-lines/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_offers/offer-lines/{id}",
				"value": "fms_offers_delete_fms_offers_offer_lines_id",
				"action": "DELETE /fms_offers/offer-lines/{id}",
				"description": "Requires features: fms_offers.offers.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_offers/offer-lines/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "GET /fms_offers/offers/{id}/contacts",
				"value": "fms_offers_get_fms_offers_offers_id_contacts",
				"action": "GET /fms_offers/offers/{id}/contacts",
				"description": "Requires features: fms_offers.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_offers/offers/{{ $parameter.id_string }}/contacts"
					}
				}
			},
			{
				"name": "POST /fms_offers/offers/{id}/convert-to-project",
				"value": "fms_offers_post_fms_offers_offers_id_convert_to_project",
				"action": "POST /fms_offers/offers/{id}/convert-to-project",
				"description": "Requires features: fms_offers.offers.manage, fms_projects.projects.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_offers/offers/{{ $parameter.id_string }}/convert-to-project"
					}
				}
			},
			{
				"name": "GET /fms_offers/offers/{id}/pdf",
				"value": "fms_offers_get_fms_offers_offers_id_pdf",
				"action": "GET /fms_offers/offers/{id}/pdf",
				"description": "Requires features: fms_offers.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_offers/offers/{{ $parameter.id_string }}/pdf"
					}
				}
			},
			{
				"name": "POST /fms_offers/offers/{id}/pdf",
				"value": "fms_offers_post_fms_offers_offers_id_pdf",
				"action": "POST /fms_offers/offers/{id}/pdf",
				"description": "Requires features: fms_offers.offers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_offers/offers/{{ $parameter.id_string }}/pdf"
					}
				}
			},
			{
				"name": "GET /fms_offers/offers/{id}",
				"value": "fms_offers_get_fms_offers_offers_id",
				"action": "GET /fms_offers/offers/{id}",
				"description": "Requires features: fms_offers.offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_offers/offers/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_offers/offers/{id}",
				"value": "fms_offers_put_fms_offers_offers_id",
				"action": "PUT /fms_offers/offers/{id}",
				"description": "Requires features: fms_offers.offers.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_offers/offers/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_offers/offers/{id}",
				"value": "fms_offers_delete_fms_offers_offers_id",
				"action": "DELETE /fms_offers/offers/{id}",
				"description": "Requires features: fms_offers.offers.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_offers/offers/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "POST /fms_offers/offers/{id}/send",
				"value": "fms_offers_post_fms_offers_offers_id_send",
				"action": "POST /fms_offers/offers/{id}/send",
				"description": "Requires features: fms_offers.offers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_offers/offers/{{ $parameter.id_string }}/send"
					}
				}
			},
			{
				"name": "Get RFQ by ID",
				"value": "fms_offers_get_fms_offers_rfq_id",
				"action": "Get RFQ by ID",
				"description": "Returns a single RFQ with its associated offers.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_offers/rfq/{{ $parameter.id_string }}"
					}
				},
				"inputSchema": {
					"simplifiedOutput": [
						"assignedToId",
						"cargoType",
						"companyName",
						"contactPerson",
						"contactPersonId",
						"containerCount",
						"context",
						"contractorId",
						"createdAt",
						"description"
					]
				}
			},
			{
				"name": "Update RFQ",
				"value": "fms_offers_put_fms_offers_rfq_id",
				"action": "Update RFQ",
				"description": "Updates an existing RFQ by ID.",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_offers/rfq/{{ $parameter.id_string }}"
					}
				},
				"inputSchema": {
					"simplifiedOutput": [
						"assignedToId",
						"cargoType",
						"companyName",
						"contactPerson",
						"contactPersonId",
						"containerCount",
						"context",
						"contractorId",
						"createdAt",
						"description"
					]
				}
			},
			{
				"name": "Delete RFQ",
				"value": "fms_offers_delete_fms_offers_rfq_id",
				"action": "Delete RFQ",
				"description": "Soft-deletes an RFQ by ID.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_offers/rfq/{{ $parameter.id_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "GET /fms_locations/airports",
				"value": "fms_locations_get_fms_locations_airports",
				"action": "GET /fms_locations/airports",
				"description": "Requires features: fms_locations.airports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_locations/airports"
					}
				}
			},
			{
				"name": "POST /fms_locations/airports",
				"value": "fms_locations_post_fms_locations_airports",
				"action": "POST /fms_locations/airports",
				"description": "Requires features: fms_locations.airports.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_locations/airports"
					}
				}
			},
			{
				"name": "GET /fms_locations/contractor-addresses",
				"value": "fms_locations_get_fms_locations_contractor_addresses",
				"action": "GET /fms_locations/contractor-addresses",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_locations/contractor-addresses"
					}
				}
			},
			{
				"name": "POST /fms_locations/contractor-addresses",
				"value": "fms_locations_post_fms_locations_contractor_addresses",
				"action": "POST /fms_locations/contractor-addresses",
				"description": "Requires features: contractors.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_locations/contractor-addresses"
					}
				}
			},
			{
				"name": "POST /fms_locations/import",
				"value": "fms_locations_post_fms_locations_import",
				"action": "POST /fms_locations/import",
				"description": "Requires features: fms_locations.import",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_locations/import"
					}
				}
			},
			{
				"name": "GET /fms_locations/locations",
				"value": "fms_locations_get_fms_locations_locations",
				"action": "GET /fms_locations/locations",
				"description": "Requires features: fms_locations.ports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_locations/locations"
					}
				}
			},
			{
				"name": "GET /fms_locations/places/autocomplete",
				"value": "fms_locations_get_fms_locations_places_autocomplete",
				"action": "GET /fms_locations/places/autocomplete",
				"description": "Requires features: fms_locations.ports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_locations/places/autocomplete"
					}
				}
			},
			{
				"name": "GET /fms_locations/places/details",
				"value": "fms_locations_get_fms_locations_places_details",
				"action": "GET /fms_locations/places/details",
				"description": "Requires features: fms_locations.ports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_locations/places/details"
					}
				}
			},
			{
				"name": "GET /fms_locations/places",
				"value": "fms_locations_get_fms_locations_places",
				"action": "GET /fms_locations/places",
				"description": "Requires features: fms_locations.ports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_locations/places"
					}
				}
			},
			{
				"name": "GET /fms_locations/ports",
				"value": "fms_locations_get_fms_locations_ports",
				"action": "GET /fms_locations/ports",
				"description": "Requires features: fms_locations.ports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_locations/ports"
					}
				}
			},
			{
				"name": "POST /fms_locations/ports",
				"value": "fms_locations_post_fms_locations_ports",
				"action": "POST /fms_locations/ports",
				"description": "Requires features: fms_locations.ports.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_locations/ports"
					}
				}
			},
			{
				"name": "GET /fms_locations/table-config",
				"value": "fms_locations_get_fms_locations_table_config",
				"action": "GET /fms_locations/table-config",
				"description": "Requires features: fms_locations.ports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_locations/table-config"
					}
				}
			},
			{
				"name": "GET /fms_locations/terminals",
				"value": "fms_locations_get_fms_locations_terminals",
				"action": "GET /fms_locations/terminals",
				"description": "Requires features: fms_locations.terminals.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_locations/terminals"
					}
				}
			},
			{
				"name": "POST /fms_locations/terminals",
				"value": "fms_locations_post_fms_locations_terminals",
				"action": "POST /fms_locations/terminals",
				"description": "Requires features: fms_locations.terminals.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_locations/terminals"
					}
				}
			},
			{
				"name": "POST /fms_locations/unified",
				"value": "fms_locations_post_fms_locations_unified",
				"action": "POST /fms_locations/unified",
				"description": "Requires features: fms_locations.ports.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_locations/unified"
					}
				}
			},
			{
				"name": "GET /fms_locations/airports/{id}",
				"value": "fms_locations_get_fms_locations_airports_id",
				"action": "GET /fms_locations/airports/{id}",
				"description": "Requires features: fms_locations.airports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_locations/airports/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_locations/airports/{id}",
				"value": "fms_locations_put_fms_locations_airports_id",
				"action": "PUT /fms_locations/airports/{id}",
				"description": "Requires features: fms_locations.airports.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_locations/airports/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_locations/airports/{id}",
				"value": "fms_locations_delete_fms_locations_airports_id",
				"action": "DELETE /fms_locations/airports/{id}",
				"description": "Requires features: fms_locations.airports.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_locations/airports/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "GET /fms_locations/locations/{id}",
				"value": "fms_locations_get_fms_locations_locations_id",
				"action": "GET /fms_locations/locations/{id}",
				"description": "Requires features: fms_locations.ports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_locations/locations/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "GET /fms_locations/ports/{id}",
				"value": "fms_locations_get_fms_locations_ports_id",
				"action": "GET /fms_locations/ports/{id}",
				"description": "Requires features: fms_locations.ports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_locations/ports/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_locations/ports/{id}",
				"value": "fms_locations_put_fms_locations_ports_id",
				"action": "PUT /fms_locations/ports/{id}",
				"description": "Requires features: fms_locations.ports.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_locations/ports/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_locations/ports/{id}",
				"value": "fms_locations_delete_fms_locations_ports_id",
				"action": "DELETE /fms_locations/ports/{id}",
				"description": "Requires features: fms_locations.ports.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_locations/ports/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "GET /fms_locations/terminals/{id}",
				"value": "fms_locations_get_fms_locations_terminals_id",
				"action": "GET /fms_locations/terminals/{id}",
				"description": "Requires features: fms_locations.terminals.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_locations/terminals/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_locations/terminals/{id}",
				"value": "fms_locations_put_fms_locations_terminals_id",
				"action": "PUT /fms_locations/terminals/{id}",
				"description": "Requires features: fms_locations.terminals.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_locations/terminals/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_locations/terminals/{id}",
				"value": "fms_locations_delete_fms_locations_terminals_id",
				"action": "DELETE /fms_locations/terminals/{id}",
				"description": "Requires features: fms_locations.terminals.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_locations/terminals/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "GET /fms_locations/unified/{id}",
				"value": "fms_locations_get_fms_locations_unified_id",
				"action": "GET /fms_locations/unified/{id}",
				"description": "Requires features: fms_locations.ports.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_locations/unified/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_locations/unified/{id}",
				"value": "fms_locations_put_fms_locations_unified_id",
				"action": "PUT /fms_locations/unified/{id}",
				"description": "Requires features: fms_locations.ports.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_locations/unified/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_locations/unified/{id}",
				"value": "fms_locations_delete_fms_locations_unified_id",
				"action": "DELETE /fms_locations/unified/{id}",
				"description": "Requires features: fms_locations.ports.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_locations/unified/{{ $parameter.id_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Locations"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "GET /fms_products/carriers",
				"value": "fms_products_get_fms_products_carriers",
				"action": "GET /fms_products/carriers",
				"description": "Requires features: fms_products.carriers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_products/carriers"
					}
				}
			},
			{
				"name": "POST /fms_products/carriers",
				"value": "fms_products_post_fms_products_carriers",
				"action": "POST /fms_products/carriers",
				"description": "Requires features: fms_products.carriers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_products/carriers"
					}
				}
			},
			{
				"name": "PUT /fms_products/carriers",
				"value": "fms_products_put_fms_products_carriers",
				"action": "PUT /fms_products/carriers",
				"description": "Requires features: fms_products.carriers.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_products/carriers"
					}
				}
			},
			{
				"name": "DELETE /fms_products/carriers",
				"value": "fms_products_delete_fms_products_carriers",
				"action": "DELETE /fms_products/carriers",
				"description": "Requires features: fms_products.carriers.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_products/carriers"
					}
				}
			},
			{
				"name": "GET /fms_products/carriers/table-config",
				"value": "fms_products_get_fms_products_carriers_table_config",
				"action": "GET /fms_products/carriers/table-config",
				"description": "Requires features: fms_products.carriers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_products/carriers/table-config"
					}
				}
			},
			{
				"name": "GET /fms_products/products",
				"value": "fms_products_get_fms_products_products",
				"action": "GET /fms_products/products",
				"description": "Requires features: fms_products.products.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_products/products"
					}
				}
			},
			{
				"name": "POST /fms_products/products",
				"value": "fms_products_post_fms_products_products",
				"action": "POST /fms_products/products",
				"description": "Requires features: fms_products.products.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_products/products"
					}
				}
			},
			{
				"name": "GET /fms_products/products/table-config",
				"value": "fms_products_get_fms_products_products_table_config",
				"action": "GET /fms_products/products/table-config",
				"description": "Requires features: fms_products.products.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_products/products/table-config"
					}
				}
			},
			{
				"name": "GET /fms_products/search",
				"value": "fms_products_get_fms_products_search",
				"action": "GET /fms_products/search",
				"description": "Requires features: fms_products.products.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_products/search"
					}
				}
			},
			{
				"name": "GET /fms_products/carriers/{id}",
				"value": "fms_products_get_fms_products_carriers_id",
				"action": "GET /fms_products/carriers/{id}",
				"description": "Requires features: fms_products.carriers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_products/carriers/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_products/carriers/{id}",
				"value": "fms_products_put_fms_products_carriers_id",
				"action": "PUT /fms_products/carriers/{id}",
				"description": "Requires features: fms_products.carriers.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_products/carriers/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_products/carriers/{id}",
				"value": "fms_products_delete_fms_products_carriers_id",
				"action": "DELETE /fms_products/carriers/{id}",
				"description": "Requires features: fms_products.carriers.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_products/carriers/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "GET /fms_products/products/{id}",
				"value": "fms_products_get_fms_products_products_id",
				"action": "GET /fms_products/products/{id}",
				"description": "Requires features: fms_products.products.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_products/products/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_products/products/{id}",
				"value": "fms_products_put_fms_products_products_id",
				"action": "PUT /fms_products/products/{id}",
				"description": "Requires features: fms_products.products.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_products/products/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_products/products/{id}",
				"value": "fms_products_delete_fms_products_products_id",
				"action": "DELETE /fms_products/products/{id}",
				"description": "Requires features: fms_products.products.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_products/products/{{ $parameter.id_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Fms Products"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "GET /fms_documents/documents",
				"value": "fms_documents_get_fms_documents_documents",
				"action": "GET /fms_documents/documents",
				"description": "Requires features: fms_documents.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_documents/documents"
					}
				}
			},
			{
				"name": "POST /fms_documents/documents",
				"value": "fms_documents_post_fms_documents_documents",
				"action": "POST /fms_documents/documents",
				"description": "Requires features: fms_documents.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_documents/documents"
					}
				}
			},
			{
				"name": "POST /fms_documents/invoices/extract",
				"value": "fms_documents_post_fms_documents_invoices_extract",
				"action": "POST /fms_documents/invoices/extract",
				"description": "Requires features: fms_documents.invoices.upload",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_documents/invoices/extract"
					}
				}
			},
			{
				"name": "GET /fms_documents/invoices",
				"value": "fms_documents_get_fms_documents_invoices",
				"action": "GET /fms_documents/invoices",
				"description": "Requires features: fms_documents.invoices.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_documents/invoices"
					}
				}
			},
			{
				"name": "POST /fms_documents/invoices",
				"value": "fms_documents_post_fms_documents_invoices",
				"action": "POST /fms_documents/invoices",
				"description": "Requires features: fms_documents.invoices.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_documents/invoices"
					}
				}
			},
			{
				"name": "Upload invoice document",
				"value": "fms_documents_post_fms_documents_invoices_upload",
				"action": "Upload invoice document",
				"description": "Upload a PDF or image file. The document is processed with OCR to extract invoice data, line items, and transportation metadata. A new FMS invoice record is created automatically.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_documents/invoices/upload"
					}
				}
			},
			{
				"name": "GET /fms_documents/table-config",
				"value": "fms_documents_get_fms_documents_table_config",
				"action": "GET /fms_documents/table-config",
				"description": "Requires features: fms_documents.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_documents/table-config"
					}
				}
			},
			{
				"name": "Upload document",
				"value": "fms_documents_post_fms_documents_upload",
				"action": "Upload document",
				"description": "Upload a new FMS document with metadata. The file is stored as an attachment and PDF pages are extracted automatically.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_documents/upload"
					}
				}
			},
			{
				"name": "GET /fms_documents/documents/{id}/download",
				"value": "fms_documents_get_fms_documents_documents_id_download",
				"action": "GET /fms_documents/documents/{id}/download",
				"description": "Requires features: fms_documents.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_documents/documents/{{ $parameter.id_string }}/download"
					}
				}
			},
			{
				"name": "GET /fms_documents/documents/{id}/extract",
				"value": "fms_documents_get_fms_documents_documents_id_extract",
				"action": "GET /fms_documents/documents/{id}/extract",
				"description": "GET /fms_documents/documents/{id}/extract",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_documents/documents/{{ $parameter.id_string }}/extract"
					}
				}
			},
			{
				"name": "POST /fms_documents/documents/{id}/extract",
				"value": "fms_documents_post_fms_documents_documents_id_extract",
				"action": "POST /fms_documents/documents/{id}/extract",
				"description": "Requires features: fms_documents.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_documents/documents/{{ $parameter.id_string }}/extract"
					}
				}
			},
			{
				"name": "POST /fms_documents/documents/{id}/feedback",
				"value": "fms_documents_post_fms_documents_documents_id_feedback",
				"action": "POST /fms_documents/documents/{id}/feedback",
				"description": "Requires features: fms_documents.view",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_documents/documents/{{ $parameter.id_string }}/feedback"
					}
				}
			},
			{
				"name": "GET /fms_documents/documents/{id}/pages/{pageNum}/image",
				"value": "fms_documents_get_fms_documents_documents_id_pages_pageNum_image",
				"action": "GET /fms_documents/documents/{id}/pages/{pageNum}/image",
				"description": "Requires features: fms_documents.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_documents/documents/{{ $parameter.id_string }}/pages/{{ $parameter.pageNum_string }}/image"
					}
				}
			},
			{
				"name": "GET /fms_documents/documents/{id}/pages",
				"value": "fms_documents_get_fms_documents_documents_id_pages",
				"action": "GET /fms_documents/documents/{id}/pages",
				"description": "Requires features: fms_documents.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_documents/documents/{{ $parameter.id_string }}/pages"
					}
				}
			},
			{
				"name": "GET /fms_documents/documents/{id}",
				"value": "fms_documents_get_fms_documents_documents_id",
				"action": "GET /fms_documents/documents/{id}",
				"description": "Requires features: fms_documents.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_documents/documents/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_documents/documents/{id}",
				"value": "fms_documents_put_fms_documents_documents_id",
				"action": "PUT /fms_documents/documents/{id}",
				"description": "Requires features: fms_documents.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_documents/documents/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PATCH /fms_documents/documents/{id}",
				"value": "fms_documents_patch_fms_documents_documents_id",
				"action": "PATCH /fms_documents/documents/{id}",
				"description": "Requires features: fms_documents.manage",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/fms_documents/documents/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_documents/documents/{id}",
				"value": "fms_documents_delete_fms_documents_documents_id",
				"action": "DELETE /fms_documents/documents/{id}",
				"description": "Requires features: fms_documents.delete",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_documents/documents/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "POST /fms_documents/invoices/{id}/extract",
				"value": "fms_documents_post_fms_documents_invoices_id_extract",
				"action": "POST /fms_documents/invoices/{id}/extract",
				"description": "Requires features: fms_documents.invoices.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_documents/invoices/{{ $parameter.id_string }}/extract"
					}
				}
			},
			{
				"name": "GET /fms_documents/invoices/{id}/line-items/{lineItemId}",
				"value": "fms_documents_get_fms_documents_invoices_id_line_items_lineItemId",
				"action": "GET /fms_documents/invoices/{id}/line-items/{lineItemId}",
				"description": "Requires features: fms_documents.invoices.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_documents/invoices/{{ $parameter.id_string }}/line-items/{{ $parameter.lineItemId_string }}"
					}
				}
			},
			{
				"name": "PATCH /fms_documents/invoices/{id}/line-items/{lineItemId}",
				"value": "fms_documents_patch_fms_documents_invoices_id_line_items_lineItemId",
				"action": "PATCH /fms_documents/invoices/{id}/line-items/{lineItemId}",
				"description": "Requires features: fms_documents.invoices.manage",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/fms_documents/invoices/{{ $parameter.id_string }}/line-items/{{ $parameter.lineItemId_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_documents/invoices/{id}/line-items/{lineItemId}",
				"value": "fms_documents_delete_fms_documents_invoices_id_line_items_lineItemId",
				"action": "DELETE /fms_documents/invoices/{id}/line-items/{lineItemId}",
				"description": "Requires features: fms_documents.invoices.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_documents/invoices/{{ $parameter.id_string }}/line-items/{{ $parameter.lineItemId_string }}"
					}
				}
			},
			{
				"name": "POST /fms_documents/invoices/{id}/line-items",
				"value": "fms_documents_post_fms_documents_invoices_id_line_items",
				"action": "POST /fms_documents/invoices/{id}/line-items",
				"description": "Requires features: fms_documents.invoices.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_documents/invoices/{{ $parameter.id_string }}/line-items"
					}
				}
			},
			{
				"name": "GET /fms_documents/invoices/{id}/match-charges",
				"value": "fms_documents_get_fms_documents_invoices_id_match_charges",
				"action": "GET /fms_documents/invoices/{id}/match-charges",
				"description": "Requires features: fms_documents.invoices.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_documents/invoices/{{ $parameter.id_string }}/match-charges"
					}
				}
			},
			{
				"name": "POST /fms_documents/invoices/{id}/match-charges",
				"value": "fms_documents_post_fms_documents_invoices_id_match_charges",
				"action": "POST /fms_documents/invoices/{id}/match-charges",
				"description": "Requires features: fms_documents.invoices.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_documents/invoices/{{ $parameter.id_string }}/match-charges"
					}
				}
			},
			{
				"name": "GET /fms_documents/invoices/{id}/pages/{pageNum}/image",
				"value": "fms_documents_get_fms_documents_invoices_id_pages_pageNum_image",
				"action": "GET /fms_documents/invoices/{id}/pages/{pageNum}/image",
				"description": "Requires features: fms_documents.invoices.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_documents/invoices/{{ $parameter.id_string }}/pages/{{ $parameter.pageNum_string }}/image"
					}
				}
			},
			{
				"name": "GET /fms_documents/invoices/{id}/pages",
				"value": "fms_documents_get_fms_documents_invoices_id_pages",
				"action": "GET /fms_documents/invoices/{id}/pages",
				"description": "Requires features: fms_documents.invoices.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_documents/invoices/{{ $parameter.id_string }}/pages"
					}
				}
			},
			{
				"name": "GET /fms_documents/invoices/{id}",
				"value": "fms_documents_get_fms_documents_invoices_id",
				"action": "GET /fms_documents/invoices/{id}",
				"description": "Requires features: fms_documents.invoices.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_documents/invoices/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "POST /fms_documents/invoices/{id}",
				"value": "fms_documents_post_fms_documents_invoices_id",
				"action": "POST /fms_documents/invoices/{id}",
				"description": "Requires features: fms_documents.invoices.approve",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_documents/invoices/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_documents/invoices/{id}",
				"value": "fms_documents_put_fms_documents_invoices_id",
				"action": "PUT /fms_documents/invoices/{id}",
				"description": "Requires features: fms_documents.invoices.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_documents/invoices/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_documents/invoices/{id}",
				"value": "fms_documents_delete_fms_documents_invoices_id",
				"action": "DELETE /fms_documents/invoices/{id}",
				"description": "Requires features: fms_documents.invoices.delete",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_documents/invoices/{{ $parameter.id_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "GET /fms_projects/projects",
				"value": "fms_projects_get_fms_projects_projects",
				"action": "GET /fms_projects/projects",
				"description": "Requires features: fms_projects.projects.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_projects/projects"
					}
				}
			},
			{
				"name": "POST /fms_projects/projects",
				"value": "fms_projects_post_fms_projects_projects",
				"action": "POST /fms_projects/projects",
				"description": "Requires features: fms_projects.projects.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_projects/projects"
					}
				}
			},
			{
				"name": "PUT /fms_projects/projects",
				"value": "fms_projects_put_fms_projects_projects",
				"action": "PUT /fms_projects/projects",
				"description": "Requires features: fms_projects.projects.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_projects/projects"
					}
				}
			},
			{
				"name": "DELETE /fms_projects/projects",
				"value": "fms_projects_delete_fms_projects_projects",
				"action": "DELETE /fms_projects/projects",
				"description": "Requires features: fms_projects.projects.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_projects/projects"
					}
				}
			},
			{
				"name": "GET /fms_projects/projects/{id}/air-units",
				"value": "fms_projects_get_fms_projects_projects_id_air_units",
				"action": "GET /fms_projects/projects/{id}/air-units",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/air-units"
					}
				}
			},
			{
				"name": "POST /fms_projects/projects/{id}/air-units",
				"value": "fms_projects_post_fms_projects_projects_id_air_units",
				"action": "POST /fms_projects/projects/{id}/air-units",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/air-units"
					}
				}
			},
			{
				"name": "PUT /fms_projects/projects/{id}/air-units",
				"value": "fms_projects_put_fms_projects_projects_id_air_units",
				"action": "PUT /fms_projects/projects/{id}/air-units",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/air-units"
					}
				}
			},
			{
				"name": "DELETE /fms_projects/projects/{id}/air-units",
				"value": "fms_projects_delete_fms_projects_projects_id_air_units",
				"action": "DELETE /fms_projects/projects/{id}/air-units",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/air-units"
					}
				}
			},
			{
				"name": "GET /fms_projects/projects/{id}/cargo",
				"value": "fms_projects_get_fms_projects_projects_id_cargo",
				"action": "GET /fms_projects/projects/{id}/cargo",
				"description": "Requires features: fms_projects.cargo.manage",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/cargo"
					}
				}
			},
			{
				"name": "POST /fms_projects/projects/{id}/cargo",
				"value": "fms_projects_post_fms_projects_projects_id_cargo",
				"action": "POST /fms_projects/projects/{id}/cargo",
				"description": "Requires features: fms_projects.cargo.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/cargo"
					}
				}
			},
			{
				"name": "PUT /fms_projects/projects/{id}/cargo",
				"value": "fms_projects_put_fms_projects_projects_id_cargo",
				"action": "PUT /fms_projects/projects/{id}/cargo",
				"description": "Requires features: fms_projects.cargo.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/cargo"
					}
				}
			},
			{
				"name": "DELETE /fms_projects/projects/{id}/cargo",
				"value": "fms_projects_delete_fms_projects_projects_id_cargo",
				"action": "DELETE /fms_projects/projects/{id}/cargo",
				"description": "Requires features: fms_projects.cargo.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/cargo"
					}
				}
			},
			{
				"name": "GET /fms_projects/projects/{id}/containers",
				"value": "fms_projects_get_fms_projects_projects_id_containers",
				"action": "GET /fms_projects/projects/{id}/containers",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/containers"
					}
				}
			},
			{
				"name": "POST /fms_projects/projects/{id}/containers",
				"value": "fms_projects_post_fms_projects_projects_id_containers",
				"action": "POST /fms_projects/projects/{id}/containers",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/containers"
					}
				}
			},
			{
				"name": "PUT /fms_projects/projects/{id}/containers",
				"value": "fms_projects_put_fms_projects_projects_id_containers",
				"action": "PUT /fms_projects/projects/{id}/containers",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/containers"
					}
				}
			},
			{
				"name": "DELETE /fms_projects/projects/{id}/containers",
				"value": "fms_projects_delete_fms_projects_projects_id_containers",
				"action": "DELETE /fms_projects/projects/{id}/containers",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/containers"
					}
				}
			},
			{
				"name": "GET /fms_projects/projects/{id}/documents",
				"value": "fms_projects_get_fms_projects_projects_id_documents",
				"action": "GET /fms_projects/projects/{id}/documents",
				"description": "Requires features: fms_projects.projects.view, fms_documents.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/documents"
					}
				}
			},
			{
				"name": "POST /fms_projects/projects/{id}/documents",
				"value": "fms_projects_post_fms_projects_projects_id_documents",
				"action": "POST /fms_projects/projects/{id}/documents",
				"description": "Requires features: fms_projects.projects.manage, fms_documents.upload",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/documents"
					}
				}
			},
			{
				"name": "GET /fms_projects/projects/{id}/invoices",
				"value": "fms_projects_get_fms_projects_projects_id_invoices",
				"action": "GET /fms_projects/projects/{id}/invoices",
				"description": "Requires features: fms_projects.projects.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/invoices"
					}
				}
			},
			{
				"name": "PUT /fms_projects/projects/{id}/invoices",
				"value": "fms_projects_put_fms_projects_projects_id_invoices",
				"action": "PUT /fms_projects/projects/{id}/invoices",
				"description": "Requires features: fms_projects.projects.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/invoices"
					}
				}
			},
			{
				"name": "GET /fms_projects/projects/{id}/legs",
				"value": "fms_projects_get_fms_projects_projects_id_legs",
				"action": "GET /fms_projects/projects/{id}/legs",
				"description": "Requires features: fms_projects.legs.manage",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/legs"
					}
				}
			},
			{
				"name": "POST /fms_projects/projects/{id}/legs",
				"value": "fms_projects_post_fms_projects_projects_id_legs",
				"action": "POST /fms_projects/projects/{id}/legs",
				"description": "Requires features: fms_projects.legs.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/legs"
					}
				}
			},
			{
				"name": "PUT /fms_projects/projects/{id}/legs",
				"value": "fms_projects_put_fms_projects_projects_id_legs",
				"action": "PUT /fms_projects/projects/{id}/legs",
				"description": "Requires features: fms_projects.legs.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/legs"
					}
				}
			},
			{
				"name": "DELETE /fms_projects/projects/{id}/legs",
				"value": "fms_projects_delete_fms_projects_projects_id_legs",
				"action": "DELETE /fms_projects/projects/{id}/legs",
				"description": "Requires features: fms_projects.legs.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/legs"
					}
				}
			},
			{
				"name": "GET /fms_projects/projects/{id}/lines/{lineId}",
				"value": "fms_projects_get_fms_projects_projects_id_lines_lineId",
				"action": "GET /fms_projects/projects/{id}/lines/{lineId}",
				"description": "Requires features: fms_projects.lines.manage",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/lines/{{ $parameter.lineId_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_projects/projects/{id}/lines/{lineId}",
				"value": "fms_projects_put_fms_projects_projects_id_lines_lineId",
				"action": "PUT /fms_projects/projects/{id}/lines/{lineId}",
				"description": "Requires features: fms_projects.lines.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/lines/{{ $parameter.lineId_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_projects/projects/{id}/lines/{lineId}",
				"value": "fms_projects_delete_fms_projects_projects_id_lines_lineId",
				"action": "DELETE /fms_projects/projects/{id}/lines/{lineId}",
				"description": "Requires features: fms_projects.lines.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/lines/{{ $parameter.lineId_string }}"
					}
				}
			},
			{
				"name": "GET /fms_projects/projects/{id}/lines",
				"value": "fms_projects_get_fms_projects_projects_id_lines",
				"action": "GET /fms_projects/projects/{id}/lines",
				"description": "Requires features: fms_projects.lines.manage",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/lines"
					}
				}
			},
			{
				"name": "POST /fms_projects/projects/{id}/lines",
				"value": "fms_projects_post_fms_projects_projects_id_lines",
				"action": "POST /fms_projects/projects/{id}/lines",
				"description": "Requires features: fms_projects.lines.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/lines"
					}
				}
			},
			{
				"name": "PUT /fms_projects/projects/{id}/lines",
				"value": "fms_projects_put_fms_projects_projects_id_lines",
				"action": "PUT /fms_projects/projects/{id}/lines",
				"description": "Requires features: fms_projects.lines.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/lines"
					}
				}
			},
			{
				"name": "DELETE /fms_projects/projects/{id}/lines",
				"value": "fms_projects_delete_fms_projects_projects_id_lines",
				"action": "DELETE /fms_projects/projects/{id}/lines",
				"description": "Requires features: fms_projects.lines.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/lines"
					}
				}
			},
			{
				"name": "POST /fms_projects/projects/{id}/link-offer",
				"value": "fms_projects_post_fms_projects_projects_id_link_offer",
				"action": "POST /fms_projects/projects/{id}/link-offer",
				"description": "Requires features: fms_projects.projects.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/link-offer"
					}
				}
			},
			{
				"name": "GET /fms_projects/projects/{id}/notes",
				"value": "fms_projects_get_fms_projects_projects_id_notes",
				"action": "GET /fms_projects/projects/{id}/notes",
				"description": "Requires features: fms_projects.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/notes"
					}
				}
			},
			{
				"name": "POST /fms_projects/projects/{id}/notes",
				"value": "fms_projects_post_fms_projects_projects_id_notes",
				"action": "POST /fms_projects/projects/{id}/notes",
				"description": "Requires features: fms_projects.edit",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/notes"
					}
				}
			},
			{
				"name": "PUT /fms_projects/projects/{id}/notes",
				"value": "fms_projects_put_fms_projects_projects_id_notes",
				"action": "PUT /fms_projects/projects/{id}/notes",
				"description": "Requires features: fms_projects.edit",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/notes"
					}
				}
			},
			{
				"name": "DELETE /fms_projects/projects/{id}/notes",
				"value": "fms_projects_delete_fms_projects_projects_id_notes",
				"action": "DELETE /fms_projects/projects/{id}/notes",
				"description": "Requires features: fms_projects.edit",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/notes"
					}
				}
			},
			{
				"name": "GET /fms_projects/projects/{id}/road-units",
				"value": "fms_projects_get_fms_projects_projects_id_road_units",
				"action": "GET /fms_projects/projects/{id}/road-units",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/road-units"
					}
				}
			},
			{
				"name": "POST /fms_projects/projects/{id}/road-units",
				"value": "fms_projects_post_fms_projects_projects_id_road_units",
				"action": "POST /fms_projects/projects/{id}/road-units",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/road-units"
					}
				}
			},
			{
				"name": "PUT /fms_projects/projects/{id}/road-units",
				"value": "fms_projects_put_fms_projects_projects_id_road_units",
				"action": "PUT /fms_projects/projects/{id}/road-units",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/road-units"
					}
				}
			},
			{
				"name": "DELETE /fms_projects/projects/{id}/road-units",
				"value": "fms_projects_delete_fms_projects_projects_id_road_units",
				"action": "DELETE /fms_projects/projects/{id}/road-units",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/road-units"
					}
				}
			},
			{
				"name": "GET /fms_projects/projects/{id}",
				"value": "fms_projects_get_fms_projects_projects_id",
				"action": "GET /fms_projects/projects/{id}",
				"description": "Requires features: fms_projects.projects.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_projects/projects/{id}",
				"value": "fms_projects_put_fms_projects_projects_id",
				"action": "PUT /fms_projects/projects/{id}",
				"description": "Requires features: fms_projects.projects.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_projects/projects/{id}",
				"value": "fms_projects_delete_fms_projects_projects_id",
				"action": "DELETE /fms_projects/projects/{id}",
				"description": "Requires features: fms_projects.projects.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "GET /fms_projects/projects/{id}/sea-containers/{containerId}",
				"value": "fms_projects_get_fms_projects_projects_id_sea_containers_containerId",
				"action": "GET /fms_projects/projects/{id}/sea-containers/{containerId}",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/sea-containers/{{ $parameter.containerId_string }}"
					}
				}
			},
			{
				"name": "PUT /fms_projects/projects/{id}/sea-containers/{containerId}",
				"value": "fms_projects_put_fms_projects_projects_id_sea_containers_containerId",
				"action": "PUT /fms_projects/projects/{id}/sea-containers/{containerId}",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/sea-containers/{{ $parameter.containerId_string }}"
					}
				}
			},
			{
				"name": "DELETE /fms_projects/projects/{id}/sea-containers/{containerId}",
				"value": "fms_projects_delete_fms_projects_projects_id_sea_containers_containerId",
				"action": "DELETE /fms_projects/projects/{id}/sea-containers/{containerId}",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/sea-containers/{{ $parameter.containerId_string }}"
					}
				}
			},
			{
				"name": "GET /fms_projects/projects/{id}/sea-containers",
				"value": "fms_projects_get_fms_projects_projects_id_sea_containers",
				"action": "GET /fms_projects/projects/{id}/sea-containers",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/sea-containers"
					}
				}
			},
			{
				"name": "POST /fms_projects/projects/{id}/sea-containers",
				"value": "fms_projects_post_fms_projects_projects_id_sea_containers",
				"action": "POST /fms_projects/projects/{id}/sea-containers",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/sea-containers"
					}
				}
			},
			{
				"name": "PUT /fms_projects/projects/{id}/sea-containers",
				"value": "fms_projects_put_fms_projects_projects_id_sea_containers",
				"action": "PUT /fms_projects/projects/{id}/sea-containers",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/sea-containers"
					}
				}
			},
			{
				"name": "DELETE /fms_projects/projects/{id}/sea-containers",
				"value": "fms_projects_delete_fms_projects_projects_id_sea_containers",
				"action": "DELETE /fms_projects/projects/{id}/sea-containers",
				"description": "Requires features: fms_projects.containers.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_projects/projects/{{ $parameter.id_string }}/sea-containers"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "GET /fms_teams/members",
				"value": "fms_teams_get_fms_teams_members",
				"action": "GET /fms_teams/members",
				"description": "Requires features: fms_teams.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_teams/members"
					}
				}
			},
			{
				"name": "GET /fms_teams/table-config",
				"value": "fms_teams_get_fms_teams_table_config",
				"action": "GET /fms_teams/table-config",
				"description": "Requires features: fms_teams.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_teams/table-config"
					}
				}
			},
			{
				"name": "GET /fms_teams/team-contractors",
				"value": "fms_teams_get_fms_teams_team_contractors",
				"action": "GET /fms_teams/team-contractors",
				"description": "Requires features: fms_teams.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_teams/team-contractors"
					}
				}
			},
			{
				"name": "POST /fms_teams/team-contractors",
				"value": "fms_teams_post_fms_teams_team_contractors",
				"action": "POST /fms_teams/team-contractors",
				"description": "Requires features: fms_teams.assign_contractors",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_teams/team-contractors"
					}
				}
			},
			{
				"name": "DELETE /fms_teams/team-contractors",
				"value": "fms_teams_delete_fms_teams_team_contractors",
				"action": "DELETE /fms_teams/team-contractors",
				"description": "Requires features: fms_teams.assign_contractors",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_teams/team-contractors"
					}
				}
			},
			{
				"name": "GET /fms_teams/team-members",
				"value": "fms_teams_get_fms_teams_team_members",
				"action": "GET /fms_teams/team-members",
				"description": "Requires features: fms_teams.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_teams/team-members"
					}
				}
			},
			{
				"name": "GET /fms_teams/teams",
				"value": "fms_teams_get_fms_teams_teams",
				"action": "GET /fms_teams/teams",
				"description": "Requires features: fms_teams.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_teams/teams"
					}
				}
			},
			{
				"name": "POST /fms_teams/teams",
				"value": "fms_teams_post_fms_teams_teams",
				"action": "POST /fms_teams/teams",
				"description": "Requires features: fms_teams.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_teams/teams"
					}
				}
			},
			{
				"name": "GET /fms_teams/user-contractors",
				"value": "fms_teams_get_fms_teams_user_contractors",
				"action": "GET /fms_teams/user-contractors",
				"description": "Requires features: fms_teams.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/fms_teams/user-contractors"
					}
				}
			},
			{
				"name": "POST /fms_teams/user-contractors",
				"value": "fms_teams_post_fms_teams_user_contractors",
				"action": "POST /fms_teams/user-contractors",
				"description": "Requires features: fms_teams.assign_contractors",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/fms_teams/user-contractors"
					}
				}
			},
			{
				"name": "DELETE /fms_teams/user-contractors",
				"value": "fms_teams_delete_fms_teams_user_contractors",
				"action": "DELETE /fms_teams/user-contractors",
				"description": "Requires features: fms_teams.assign_contractors",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/fms_teams/user-contractors"
					}
				}
			},
			{
				"name": "PUT /fms_teams/members/{userId}",
				"value": "fms_teams_put_fms_teams_members_userId",
				"action": "PUT /fms_teams/members/{userId}",
				"description": "Requires features: fms_teams.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/fms_teams/members/{{ $parameter.userId_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Fms Teams"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "Fetch delayed shipments metrics",
				"value": "frc_rfqs_get_frc_rfqs_dashboard_widgets_delayed",
				"action": "Fetch delayed shipments metrics",
				"description": "Returns count and details for delayed RFQs within the scoped tenant/organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_rfqs/dashboard/widgets/delayed"
					}
				}
			},
			{
				"name": "Fetch RFQ pipeline metrics",
				"value": "frc_rfqs_get_frc_rfqs_dashboard_widgets_pipeline",
				"action": "Fetch RFQ pipeline metrics",
				"description": "Returns RFQ counts and values grouped by sales stage within the scoped tenant/organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_rfqs/dashboard/widgets/pipeline"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo RFQs"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "GET /frc_rfqs/rfqs/board",
				"value": "frc_rfqs_get_frc_rfqs_rfqs_board",
				"action": "GET /frc_rfqs/rfqs/board",
				"description": "Requires features: frc_rfqs.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_rfqs/rfqs/board"
					}
				}
			},
			{
				"name": "GET /frc_rfqs/rfqs",
				"value": "frc_rfqs_get_frc_rfqs_rfqs",
				"action": "GET /frc_rfqs/rfqs",
				"description": "Requires features: frc_rfqs.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_rfqs/rfqs"
					}
				}
			},
			{
				"name": "POST /frc_rfqs/rfqs",
				"value": "frc_rfqs_post_frc_rfqs_rfqs",
				"action": "POST /frc_rfqs/rfqs",
				"description": "Requires features: frc_rfqs.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/frc_rfqs/rfqs"
					}
				}
			},
			{
				"name": "PUT /frc_rfqs/rfqs/{id}/cargo/{cargoId}",
				"value": "frc_rfqs_put_frc_rfqs_rfqs_id_cargo_cargoId",
				"action": "PUT /frc_rfqs/rfqs/{id}/cargo/{cargoId}",
				"description": "Requires features: frc_rfqs.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/frc_rfqs/rfqs/{{ $parameter.id_string }}/cargo/{{ $parameter.cargoId_string }}"
					}
				}
			},
			{
				"name": "DELETE /frc_rfqs/rfqs/{id}/cargo/{cargoId}",
				"value": "frc_rfqs_delete_frc_rfqs_rfqs_id_cargo_cargoId",
				"action": "DELETE /frc_rfqs/rfqs/{id}/cargo/{cargoId}",
				"description": "Requires features: frc_rfqs.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/frc_rfqs/rfqs/{{ $parameter.id_string }}/cargo/{{ $parameter.cargoId_string }}"
					}
				}
			},
			{
				"name": "GET /frc_rfqs/rfqs/{id}/cargo",
				"value": "frc_rfqs_get_frc_rfqs_rfqs_id_cargo",
				"action": "GET /frc_rfqs/rfqs/{id}/cargo",
				"description": "Requires features: frc_rfqs.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_rfqs/rfqs/{{ $parameter.id_string }}/cargo"
					}
				}
			},
			{
				"name": "POST /frc_rfqs/rfqs/{id}/cargo",
				"value": "frc_rfqs_post_frc_rfqs_rfqs_id_cargo",
				"action": "POST /frc_rfqs/rfqs/{id}/cargo",
				"description": "Requires features: frc_rfqs.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/frc_rfqs/rfqs/{{ $parameter.id_string }}/cargo"
					}
				}
			},
			{
				"name": "GET /frc_rfqs/rfqs/{id}",
				"value": "frc_rfqs_get_frc_rfqs_rfqs_id",
				"action": "GET /frc_rfqs/rfqs/{id}",
				"description": "Requires features: frc_rfqs.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_rfqs/rfqs/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /frc_rfqs/rfqs/{id}",
				"value": "frc_rfqs_put_frc_rfqs_rfqs_id",
				"action": "PUT /frc_rfqs/rfqs/{id}",
				"description": "Requires features: frc_rfqs.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/frc_rfqs/rfqs/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /frc_rfqs/rfqs/{id}",
				"value": "frc_rfqs_delete_frc_rfqs_rfqs_id",
				"action": "DELETE /frc_rfqs/rfqs/{id}",
				"description": "Requires features: frc_rfqs.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/frc_rfqs/rfqs/{{ $parameter.id_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Frc Rfqs"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "Fetch offer conversion rate metrics",
				"value": "frc_offers_get_frc_offers_dashboard_widgets_conversion_rate",
				"action": "Fetch offer conversion rate metrics",
				"description": "Returns conversion rate and breakdown of offers by final status within the scoped tenant/organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_offers/dashboard/widgets/conversion-rate"
					}
				}
			},
			{
				"name": "Fetch upcoming departures",
				"value": "frc_offers_get_frc_offers_dashboard_widgets_upcoming_departures",
				"action": "Fetch upcoming departures",
				"description": "Returns upcoming flight departures within the specified period for the scoped tenant/organization.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_offers/dashboard/widgets/upcoming-departures"
					}
				}
			},
			{
				"name": "GET /frc_offers/offers",
				"value": "frc_offers_get_frc_offers_offers",
				"action": "GET /frc_offers/offers",
				"description": "Requires features: frc_offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_offers/offers"
					}
				}
			},
			{
				"name": "POST /frc_offers/offers",
				"value": "frc_offers_post_frc_offers_offers",
				"action": "POST /frc_offers/offers",
				"description": "Requires features: frc_offers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/frc_offers/offers"
					}
				}
			},
			{
				"name": "POST /frc_offers/offers/{id}/accept",
				"value": "frc_offers_post_frc_offers_offers_id_accept",
				"action": "POST /frc_offers/offers/{id}/accept",
				"description": "Requires features: frc_offers.manage, frc_projects.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/frc_offers/offers/{{ $parameter.id_string }}/accept"
					}
				}
			},
			{
				"name": "GET /frc_offers/offers/{id}",
				"value": "frc_offers_get_frc_offers_offers_id",
				"action": "GET /frc_offers/offers/{id}",
				"description": "Requires features: frc_offers.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_offers/offers/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /frc_offers/offers/{id}",
				"value": "frc_offers_put_frc_offers_offers_id",
				"action": "PUT /frc_offers/offers/{id}",
				"description": "Requires features: frc_offers.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/frc_offers/offers/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /frc_offers/offers/{id}",
				"value": "frc_offers_delete_frc_offers_offers_id",
				"action": "DELETE /frc_offers/offers/{id}",
				"description": "Requires features: frc_offers.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/frc_offers/offers/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /frc_offers/offers/{id}/routing/{routingId}",
				"value": "frc_offers_put_frc_offers_offers_id_routing_routingId",
				"action": "PUT /frc_offers/offers/{id}/routing/{routingId}",
				"description": "Requires features: frc_offers.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/frc_offers/offers/{{ $parameter.id_string }}/routing/{{ $parameter.routingId_string }}"
					}
				}
			},
			{
				"name": "DELETE /frc_offers/offers/{id}/routing/{routingId}",
				"value": "frc_offers_delete_frc_offers_offers_id_routing_routingId",
				"action": "DELETE /frc_offers/offers/{id}/routing/{routingId}",
				"description": "Requires features: frc_offers.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/frc_offers/offers/{{ $parameter.id_string }}/routing/{{ $parameter.routingId_string }}"
					}
				}
			},
			{
				"name": "POST /frc_offers/offers/{id}/routing",
				"value": "frc_offers_post_frc_offers_offers_id_routing",
				"action": "POST /frc_offers/offers/{id}/routing",
				"description": "Requires features: frc_offers.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/frc_offers/offers/{{ $parameter.id_string }}/routing"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Offers"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "GET /frc_projects/projects",
				"value": "frc_projects_get_frc_projects_projects",
				"action": "GET /frc_projects/projects",
				"description": "Requires features: frc_projects.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_projects/projects"
					}
				}
			},
			{
				"name": "POST /frc_projects/projects",
				"value": "frc_projects_post_frc_projects_projects",
				"action": "POST /frc_projects/projects",
				"description": "Requires features: frc_projects.manage",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/frc_projects/projects"
					}
				}
			},
			{
				"name": "GET /frc_projects/projects/{id}",
				"value": "frc_projects_get_frc_projects_projects_id",
				"action": "GET /frc_projects/projects/{id}",
				"description": "Requires features: frc_projects.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_projects/projects/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /frc_projects/projects/{id}",
				"value": "frc_projects_put_frc_projects_projects_id",
				"action": "PUT /frc_projects/projects/{id}",
				"description": "Requires features: frc_projects.manage",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/frc_projects/projects/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /frc_projects/projects/{id}",
				"value": "frc_projects_delete_frc_projects_projects_id",
				"action": "DELETE /frc_projects/projects/{id}",
				"description": "Requires features: frc_projects.manage",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/frc_projects/projects/{{ $parameter.id_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Projects"
				]
			}
		}
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"description": "Select the operation to work with",
		"options": [
			{
				"name": "GET /frc_contractors/contractors",
				"value": "frc_contractors_get_frc_contractors_contractors",
				"action": "GET /frc_contractors/contractors",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_contractors/contractors"
					}
				}
			},
			{
				"name": "POST /frc_contractors/contractors",
				"value": "frc_contractors_post_frc_contractors_contractors",
				"action": "POST /frc_contractors/contractors",
				"description": "Requires features: contractors.create",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/frc_contractors/contractors"
					}
				}
			},
			{
				"name": "GET /frc_contractors/contractors/{id}/offers",
				"value": "frc_contractors_get_frc_contractors_contractors_id_offers",
				"action": "GET /frc_contractors/contractors/{id}/offers",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_contractors/contractors/{{ $parameter.id_string }}/offers"
					}
				}
			},
			{
				"name": "GET /frc_contractors/contractors/{id}/rfqs",
				"value": "frc_contractors_get_frc_contractors_contractors_id_rfqs",
				"action": "GET /frc_contractors/contractors/{id}/rfqs",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_contractors/contractors/{{ $parameter.id_string }}/rfqs"
					}
				}
			},
			{
				"name": "GET /frc_contractors/contractors/{id}",
				"value": "frc_contractors_get_frc_contractors_contractors_id",
				"action": "GET /frc_contractors/contractors/{id}",
				"description": "Requires features: contractors.view",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/frc_contractors/contractors/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "PUT /frc_contractors/contractors/{id}",
				"value": "frc_contractors_put_frc_contractors_contractors_id",
				"action": "PUT /frc_contractors/contractors/{id}",
				"description": "Requires features: contractors.edit",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/frc_contractors/contractors/{{ $parameter.id_string }}"
					}
				}
			},
			{
				"name": "DELETE /frc_contractors/contractors/{id}",
				"value": "frc_contractors_delete_frc_contractors_contractors_id",
				"action": "DELETE /frc_contractors/contractors/{id}",
				"description": "Requires features: contractors.delete",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/frc_contractors/contractors/{{ $parameter.id_string }}"
					}
				}
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"Frc Contractors"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Offers"
				],
				"operation": [
					"frc_offers_delete_frc_offers_offers_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Offers"
				],
				"operation": [
					"frc_offers_delete_frc_offers_offers_id_routing_routingId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Routing Id",
		"name": "routingId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Offers"
				],
				"operation": [
					"frc_offers_delete_frc_offers_offers_id_routing_routingId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"request": {
				"qs": {
					"showComparison": "={{ $value }}"
				}
			}
		},
		"displayName": "Show Comparison",
		"name": "showComparison_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Offers"
				],
				"operation": [
					"frc_offers_get_frc_offers_dashboard_widgets_conversion_rate"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Tenant Id",
				"name": "tenantId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Organization Id",
				"name": "organizationId_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "last7",
						"value": "last7"
					},
					{
						"name": "last30",
						"value": "last30"
					},
					{
						"name": "last90",
						"value": "last90"
					},
					{
						"name": "thisMonth",
						"value": "thisMonth"
					},
					{
						"name": "thisQuarter",
						"value": "thisQuarter"
					}
				],
				"displayName": "Date Range",
				"name": "dateRange_options"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"tenantId": "={{ $value.tenantId_string }}",
					"organizationId": "={{ $value.organizationId_string }}",
					"dateRange": "={{ $value.dateRange_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Offers"
				],
				"operation": [
					"frc_offers_get_frc_offers_dashboard_widgets_conversion_rate"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Tenant Id",
				"name": "tenantId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Organization Id",
				"name": "organizationId_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Days Ahead",
				"name": "daysAhead_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Max Items",
				"name": "maxItems_number"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"tenantId": "={{ $value.tenantId_string }}",
					"organizationId": "={{ $value.organizationId_string }}",
					"daysAhead": "={{ $value.daysAhead_number }}",
					"maxItems": "={{ $value.maxItems_number }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Offers"
				],
				"operation": [
					"frc_offers_get_frc_offers_dashboard_widgets_upcoming_departures"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Offers"
				],
				"operation": [
					"frc_offers_get_frc_offers_offers_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Offers"
				],
				"operation": [
					"frc_offers_post_frc_offers_offers_id_accept"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Offers"
				],
				"operation": [
					"frc_offers_post_frc_offers_offers_id_routing"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Offers"
				],
				"operation": [
					"frc_offers_put_frc_offers_offers_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Offers"
				],
				"operation": [
					"frc_offers_put_frc_offers_offers_id_routing_routingId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Routing Id",
		"name": "routingId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Offers"
				],
				"operation": [
					"frc_offers_put_frc_offers_offers_id_routing_routingId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Projects"
				],
				"operation": [
					"frc_projects_delete_frc_projects_projects_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Projects"
				],
				"operation": [
					"frc_projects_get_frc_projects_projects_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo Projects"
				],
				"operation": [
					"frc_projects_put_frc_projects_projects_id"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Tenant Id",
				"name": "tenantId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Organization Id",
				"name": "organizationId_string"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"tenantId": "={{ $value.tenantId_string }}",
					"organizationId": "={{ $value.organizationId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo RFQs"
				],
				"operation": [
					"frc_rfqs_get_frc_rfqs_dashboard_widgets_delayed"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"request": {
				"qs": {
					"showComparison": "={{ $value }}"
				}
			}
		},
		"displayName": "Show Comparison",
		"name": "showComparison_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo RFQs"
				],
				"operation": [
					"frc_rfqs_get_frc_rfqs_dashboard_widgets_pipeline"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Tenant Id",
				"name": "tenantId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Organization Id",
				"name": "organizationId_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "last7",
						"value": "last7"
					},
					{
						"name": "last30",
						"value": "last30"
					},
					{
						"name": "last90",
						"value": "last90"
					},
					{
						"name": "thisMonth",
						"value": "thisMonth"
					},
					{
						"name": "thisQuarter",
						"value": "thisQuarter"
					}
				],
				"displayName": "Date Range",
				"name": "dateRange_options"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"tenantId": "={{ $value.tenantId_string }}",
					"organizationId": "={{ $value.organizationId_string }}",
					"dateRange": "={{ $value.dateRange_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"4R Cargo RFQs"
				],
				"operation": [
					"frc_rfqs_get_frc_rfqs_dashboard_widgets_pipeline"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Contractors"
				],
				"operation": [
					"contractors_delete_contractors_contractors_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Contractors"
				],
				"operation": [
					"contractors_get_contractors_contractors_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Contractors"
				],
				"operation": [
					"contractors_put_contractors_contractors_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_delete_fms_documents_documents_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_delete_fms_documents_invoices_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_delete_fms_documents_invoices_id_line_items_lineItemId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Line Item Id",
		"name": "lineItemId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_delete_fms_documents_invoices_id_line_items_lineItemId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_get_fms_documents_documents_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_get_fms_documents_documents_id_download"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_get_fms_documents_documents_id_extract"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_get_fms_documents_documents_id_pages"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_get_fms_documents_documents_id_pages_pageNum_image"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Page Num",
		"name": "pageNum_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_get_fms_documents_documents_id_pages_pageNum_image"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_get_fms_documents_invoices_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_get_fms_documents_invoices_id_line_items_lineItemId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Line Item Id",
		"name": "lineItemId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_get_fms_documents_invoices_id_line_items_lineItemId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_get_fms_documents_invoices_id_match_charges"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_get_fms_documents_invoices_id_pages"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_get_fms_documents_invoices_id_pages_pageNum_image"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Page Num",
		"name": "pageNum_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_get_fms_documents_invoices_id_pages_pageNum_image"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_patch_fms_documents_documents_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_patch_fms_documents_invoices_id_line_items_lineItemId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Line Item Id",
		"name": "lineItemId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_patch_fms_documents_invoices_id_line_items_lineItemId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_post_fms_documents_documents_id_extract"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_post_fms_documents_documents_id_feedback"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_post_fms_documents_invoices_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_post_fms_documents_invoices_id_extract"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_post_fms_documents_invoices_id_line_items"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_post_fms_documents_invoices_id_match_charges"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "file"
			}
		},
		"displayName": "File",
		"name": "file_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_post_fms_documents_invoices_upload"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "file"
			}
		},
		"displayName": "File",
		"name": "file_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_post_fms_documents_upload"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "body",
				"value": "={{ $value }}",
				"property": "name"
			}
		},
		"displayName": "Name",
		"name": "name_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_post_fms_documents_upload"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_fms_documents_post_fms_documents_upload",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_post_fms_documents_upload"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "offer",
						"value": "offer"
					},
					{
						"name": "invoice",
						"value": "invoice"
					},
					{
						"name": "customs_declaration",
						"value": "customs_declaration"
					},
					{
						"name": "bill_of_lading",
						"value": "bill_of_lading"
					},
					{
						"name": "booking_confirmation",
						"value": "booking_confirmation"
					},
					{
						"name": "delivery_note",
						"value": "delivery_note"
					},
					{
						"name": "packing_list",
						"value": "packing_list"
					},
					{
						"name": "vgm_certificate",
						"value": "vgm_certificate"
					},
					{
						"name": "other",
						"value": "other"
					}
				],
				"displayName": "Category",
				"name": "category_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Description",
				"name": "description_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Related Entity Id",
				"name": "relatedEntityId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Related Entity Type",
				"name": "relatedEntityType_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"category": "={{ $value.category_options }}",
					"description": "={{ $value.description_string }}",
					"relatedEntityId": "={{ $value.relatedEntityId_string }}",
					"relatedEntityType": "={{ $value.relatedEntityType_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_post_fms_documents_upload"
				],
				"bodyInputMode_fms_documents_post_fms_documents_upload": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_fms_documents_post_fms_documents_upload",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_post_fms_documents_upload"
				],
				"bodyInputMode_fms_documents_post_fms_documents_upload": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_put_fms_documents_documents_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Documents"
				],
				"operation": [
					"fms_documents_put_fms_documents_invoices_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Locations"
				],
				"operation": [
					"fms_locations_delete_fms_locations_airports_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Locations"
				],
				"operation": [
					"fms_locations_delete_fms_locations_ports_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Locations"
				],
				"operation": [
					"fms_locations_delete_fms_locations_terminals_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Locations"
				],
				"operation": [
					"fms_locations_delete_fms_locations_unified_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Locations"
				],
				"operation": [
					"fms_locations_get_fms_locations_airports_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Locations"
				],
				"operation": [
					"fms_locations_get_fms_locations_locations_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Locations"
				],
				"operation": [
					"fms_locations_get_fms_locations_ports_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Locations"
				],
				"operation": [
					"fms_locations_get_fms_locations_terminals_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Locations"
				],
				"operation": [
					"fms_locations_get_fms_locations_unified_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Locations"
				],
				"operation": [
					"fms_locations_put_fms_locations_airports_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Locations"
				],
				"operation": [
					"fms_locations_put_fms_locations_ports_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Locations"
				],
				"operation": [
					"fms_locations_put_fms_locations_terminals_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Locations"
				],
				"operation": [
					"fms_locations_put_fms_locations_unified_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_delete_fms_offers_offer_lines_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_delete_fms_offers_offers_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_delete_fms_offers_rfq_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_get_fms_offers_calculations_id"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Tenant Id",
				"name": "tenantId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Organization Id",
				"name": "organizationId_string"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"tenantId": "={{ $value.tenantId_string }}",
					"organizationId": "={{ $value.organizationId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_get_fms_offers_dashboard_widgets_pending_response_offers"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Tenant Id",
				"name": "tenantId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Organization Id",
				"name": "organizationId_string"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"tenantId": "={{ $value.tenantId_string }}",
					"organizationId": "={{ $value.organizationId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_get_fms_offers_dashboard_widgets_unsent_offers"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_get_fms_offers_offer_lines_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_get_fms_offers_offers_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_get_fms_offers_offers_id_contacts"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_get_fms_offers_offers_id_pdf"
				]
			}
		}
	},
	{
		"displayName": "Options",
		"name": "options",
		"type": "collection",
		"placeholder": "Add option",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "incoming",
						"value": "incoming"
					},
					{
						"name": "in_progress",
						"value": "in_progress"
					},
					{
						"name": "waiting_for_client",
						"value": "waiting_for_client"
					},
					{
						"name": "approved",
						"value": "approved"
					},
					{
						"name": "declined",
						"value": "declined"
					}
				],
				"displayName": "Status",
				"name": "status_options"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Page",
				"name": "page_number"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Limit",
				"name": "limit_number"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Q",
				"name": "q_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Sort Field",
				"name": "sortField_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "asc",
						"value": "asc"
					},
					{
						"name": "desc",
						"value": "desc"
					}
				],
				"displayName": "Sort Dir",
				"name": "sortDir_options"
			}
		],
		"routing": {
			"request": {
				"qs": {
					"status": "={{ $value.status_options }}",
					"page": "={{ $value.page_number }}",
					"limit": "={{ $value.limit_number }}",
					"q": "={{ $value.q_string }}",
					"sortField": "={{ $value.sortField_string }}",
					"sortDir": "={{ $value.sortDir_options }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_get_fms_offers_rfq"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_get_fms_offers_rfq_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_post_fms_offers_offers_id_convert_to_project"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_post_fms_offers_offers_id_pdf"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_post_fms_offers_offers_id_send"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_fms_offers_post_fms_offers_rfq",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_post_fms_offers_rfq"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Title",
				"name": "title_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Description",
				"name": "description_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Origin",
				"name": "origin_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Destination",
				"name": "destination_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Origin Location Id",
				"name": "originLocationId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Destination Location Id",
				"name": "destinationLocationId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Place Of Loading",
				"name": "placeOfLoading_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Place Of Loading Id",
				"name": "placeOfLoadingId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Place Of Delivery",
				"name": "placeOfDelivery_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Place Of Delivery Id",
				"name": "placeOfDeliveryId_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Container Count",
				"name": "containerCount_number"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "import",
						"value": "import"
					},
					{
						"name": "export",
						"value": "export"
					},
					{
						"name": "both",
						"value": "both"
					}
				],
				"displayName": "Direction",
				"name": "direction_options"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "sea",
						"value": "sea"
					},
					{
						"name": "air",
						"value": "air"
					},
					{
						"name": "road",
						"value": "road"
					},
					{
						"name": "rail",
						"value": "rail"
					},
					{
						"name": "barge",
						"value": "barge"
					}
				],
				"displayName": "Transport Mode",
				"name": "transportMode_options"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "general",
						"value": "general"
					},
					{
						"name": "dangerous",
						"value": "dangerous"
					},
					{
						"name": "perishable",
						"value": "perishable"
					},
					{
						"name": "oog",
						"value": "oog"
					}
				],
				"displayName": "Cargo Type",
				"name": "cargoType_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Company Name",
				"name": "companyName_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Contractor Id",
				"name": "contractorId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Contact Person",
				"name": "contactPerson_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Contact Person Id",
				"name": "contactPersonId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Context",
				"name": "context_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "incoming",
						"value": "incoming"
					},
					{
						"name": "in_progress",
						"value": "in_progress"
					},
					{
						"name": "waiting_for_client",
						"value": "waiting_for_client"
					},
					{
						"name": "approved",
						"value": "approved"
					},
					{
						"name": "declined",
						"value": "declined"
					}
				],
				"displayName": "Status",
				"name": "status_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Assigned To Id",
				"name": "assignedToId_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"title": "={{ $value.title_string }}",
					"description": "={{ $value.description_string }}",
					"origin": "={{ $value.origin_string }}",
					"destination": "={{ $value.destination_string }}",
					"originLocationId": "={{ $value.originLocationId_string }}",
					"destinationLocationId": "={{ $value.destinationLocationId_string }}",
					"placeOfLoading": "={{ $value.placeOfLoading_string }}",
					"placeOfLoadingId": "={{ $value.placeOfLoadingId_string }}",
					"placeOfDelivery": "={{ $value.placeOfDelivery_string }}",
					"placeOfDeliveryId": "={{ $value.placeOfDeliveryId_string }}",
					"containerCount": "={{ $value.containerCount_number }}",
					"direction": "={{ $value.direction_options }}",
					"transportMode": "={{ $value.transportMode_options }}",
					"cargoType": "={{ $value.cargoType_options }}",
					"companyName": "={{ $value.companyName_string }}",
					"contractorId": "={{ $value.contractorId_string }}",
					"contactPerson": "={{ $value.contactPerson_string }}",
					"contactPersonId": "={{ $value.contactPersonId_string }}",
					"context": "={{ $value.context_string }}",
					"status": "={{ $value.status_options }}",
					"assignedToId": "={{ $value.assignedToId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_post_fms_offers_rfq"
				],
				"bodyInputMode_fms_offers_post_fms_offers_rfq": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_fms_offers_post_fms_offers_rfq",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_post_fms_offers_rfq"
				],
				"bodyInputMode_fms_offers_post_fms_offers_rfq": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_put_fms_offers_calculations_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_put_fms_offers_offer_lines_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_put_fms_offers_offers_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_put_fms_offers_rfq_id"
				]
			}
		}
	},
	{
		"displayName": "Body Input Mode",
		"name": "bodyInputMode_fms_offers_put_fms_offers_rfq_id",
		"type": "options",
		"default": "fields",
		"description": "Choose how to provide the request body",
		"options": [
			{
				"name": "Form Fields",
				"value": "fields"
			},
			{
				"name": "Raw JSON",
				"value": "json"
			}
		],
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_put_fms_offers_rfq_id"
				]
			}
		}
	},
	{
		"displayName": "Additional Properties",
		"name": "additionalProperties",
		"type": "collection",
		"placeholder": "Add property",
		"default": {},
		"required": false,
		"options": [
			{
				"type": "string",
				"default": "",
				"displayName": "Title",
				"name": "title_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Description",
				"name": "description_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Origin",
				"name": "origin_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Destination",
				"name": "destination_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Origin Location Id",
				"name": "originLocationId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Destination Location Id",
				"name": "destinationLocationId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Place Of Loading",
				"name": "placeOfLoading_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Place Of Loading Id",
				"name": "placeOfLoadingId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Place Of Delivery",
				"name": "placeOfDelivery_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Place Of Delivery Id",
				"name": "placeOfDeliveryId_string"
			},
			{
				"type": "number",
				"default": "",
				"displayName": "Container Count",
				"name": "containerCount_number"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "import",
						"value": "import"
					},
					{
						"name": "export",
						"value": "export"
					},
					{
						"name": "both",
						"value": "both"
					}
				],
				"displayName": "Direction",
				"name": "direction_options"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "sea",
						"value": "sea"
					},
					{
						"name": "air",
						"value": "air"
					},
					{
						"name": "road",
						"value": "road"
					},
					{
						"name": "rail",
						"value": "rail"
					},
					{
						"name": "barge",
						"value": "barge"
					}
				],
				"displayName": "Transport Mode",
				"name": "transportMode_options"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "general",
						"value": "general"
					},
					{
						"name": "dangerous",
						"value": "dangerous"
					},
					{
						"name": "perishable",
						"value": "perishable"
					},
					{
						"name": "oog",
						"value": "oog"
					}
				],
				"displayName": "Cargo Type",
				"name": "cargoType_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Company Name",
				"name": "companyName_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Contractor Id",
				"name": "contractorId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Contact Person",
				"name": "contactPerson_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Contact Person Id",
				"name": "contactPersonId_string"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Context",
				"name": "context_string"
			},
			{
				"type": "options",
				"default": "",
				"options": [
					{
						"name": "incoming",
						"value": "incoming"
					},
					{
						"name": "in_progress",
						"value": "in_progress"
					},
					{
						"name": "waiting_for_client",
						"value": "waiting_for_client"
					},
					{
						"name": "approved",
						"value": "approved"
					},
					{
						"name": "declined",
						"value": "declined"
					}
				],
				"displayName": "Status",
				"name": "status_options"
			},
			{
				"type": "string",
				"default": "",
				"displayName": "Assigned To Id",
				"name": "assignedToId_string"
			}
		],
		"routing": {
			"request": {
				"body": {
					"title": "={{ $value.title_string }}",
					"description": "={{ $value.description_string }}",
					"origin": "={{ $value.origin_string }}",
					"destination": "={{ $value.destination_string }}",
					"originLocationId": "={{ $value.originLocationId_string }}",
					"destinationLocationId": "={{ $value.destinationLocationId_string }}",
					"placeOfLoading": "={{ $value.placeOfLoading_string }}",
					"placeOfLoadingId": "={{ $value.placeOfLoadingId_string }}",
					"placeOfDelivery": "={{ $value.placeOfDelivery_string }}",
					"placeOfDeliveryId": "={{ $value.placeOfDeliveryId_string }}",
					"containerCount": "={{ $value.containerCount_number }}",
					"direction": "={{ $value.direction_options }}",
					"transportMode": "={{ $value.transportMode_options }}",
					"cargoType": "={{ $value.cargoType_options }}",
					"companyName": "={{ $value.companyName_string }}",
					"contractorId": "={{ $value.contractorId_string }}",
					"contactPerson": "={{ $value.contactPerson_string }}",
					"contactPersonId": "={{ $value.contactPersonId_string }}",
					"context": "={{ $value.context_string }}",
					"status": "={{ $value.status_options }}",
					"assignedToId": "={{ $value.assignedToId_string }}"
				}
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_put_fms_offers_rfq_id"
				],
				"bodyInputMode_fms_offers_put_fms_offers_rfq_id": [
					"fields"
				]
			}
		}
	},
	{
		"displayName": "JSON Body",
		"name": "jsonBody_fms_offers_put_fms_offers_rfq_id",
		"type": "json",
		"default": "{}",
		"description": "Raw JSON body to send with the request",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Offers"
				],
				"operation": [
					"fms_offers_put_fms_offers_rfq_id"
				],
				"bodyInputMode_fms_offers_put_fms_offers_rfq_id": [
					"json"
				]
			}
		},
		"routing": {
			"request": {
				"body": "={{ typeof $value === \"string\" ? JSON.parse($value) : $value }}"
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_delete_fms_projects_projects_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_delete_fms_projects_projects_id_air_units"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_delete_fms_projects_projects_id_cargo"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_delete_fms_projects_projects_id_containers"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_delete_fms_projects_projects_id_legs"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_delete_fms_projects_projects_id_lines"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_delete_fms_projects_projects_id_lines_lineId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Line Id",
		"name": "lineId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_delete_fms_projects_projects_id_lines_lineId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_delete_fms_projects_projects_id_notes"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_delete_fms_projects_projects_id_road_units"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_delete_fms_projects_projects_id_sea_containers"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Container Id",
		"name": "containerId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_delete_fms_projects_projects_id_sea_containers_containerId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_delete_fms_projects_projects_id_sea_containers_containerId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_get_fms_projects_projects_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_get_fms_projects_projects_id_air_units"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_get_fms_projects_projects_id_cargo"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_get_fms_projects_projects_id_containers"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_get_fms_projects_projects_id_documents"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_get_fms_projects_projects_id_invoices"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_get_fms_projects_projects_id_legs"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_get_fms_projects_projects_id_lines"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_get_fms_projects_projects_id_lines_lineId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Line Id",
		"name": "lineId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_get_fms_projects_projects_id_lines_lineId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_get_fms_projects_projects_id_notes"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_get_fms_projects_projects_id_road_units"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_get_fms_projects_projects_id_sea_containers"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Container Id",
		"name": "containerId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_get_fms_projects_projects_id_sea_containers_containerId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_get_fms_projects_projects_id_sea_containers_containerId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_post_fms_projects_projects_id_air_units"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_post_fms_projects_projects_id_cargo"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_post_fms_projects_projects_id_containers"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_post_fms_projects_projects_id_documents"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_post_fms_projects_projects_id_legs"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_post_fms_projects_projects_id_lines"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_post_fms_projects_projects_id_link_offer"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_post_fms_projects_projects_id_notes"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_post_fms_projects_projects_id_road_units"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_post_fms_projects_projects_id_sea_containers"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_put_fms_projects_projects_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_put_fms_projects_projects_id_air_units"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_put_fms_projects_projects_id_cargo"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_put_fms_projects_projects_id_containers"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_put_fms_projects_projects_id_invoices"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_put_fms_projects_projects_id_legs"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_put_fms_projects_projects_id_lines"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_put_fms_projects_projects_id_lines_lineId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Line Id",
		"name": "lineId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_put_fms_projects_projects_id_lines_lineId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_put_fms_projects_projects_id_notes"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_put_fms_projects_projects_id_road_units"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_put_fms_projects_projects_id_sea_containers"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Container Id",
		"name": "containerId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_put_fms_projects_projects_id_sea_containers_containerId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"FMS Projects"
				],
				"operation": [
					"fms_projects_put_fms_projects_projects_id_sea_containers_containerId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Fms Products"
				],
				"operation": [
					"fms_products_delete_fms_products_carriers_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Fms Products"
				],
				"operation": [
					"fms_products_delete_fms_products_products_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Fms Products"
				],
				"operation": [
					"fms_products_get_fms_products_carriers_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Fms Products"
				],
				"operation": [
					"fms_products_get_fms_products_products_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Fms Products"
				],
				"operation": [
					"fms_products_put_fms_products_carriers_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Fms Products"
				],
				"operation": [
					"fms_products_put_fms_products_products_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "User Id",
		"name": "userId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Fms Teams"
				],
				"operation": [
					"fms_teams_put_fms_teams_members_userId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Frc Contractors"
				],
				"operation": [
					"frc_contractors_delete_frc_contractors_contractors_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Frc Contractors"
				],
				"operation": [
					"frc_contractors_get_frc_contractors_contractors_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Frc Contractors"
				],
				"operation": [
					"frc_contractors_get_frc_contractors_contractors_id_offers"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Frc Contractors"
				],
				"operation": [
					"frc_contractors_get_frc_contractors_contractors_id_rfqs"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Frc Contractors"
				],
				"operation": [
					"frc_contractors_put_frc_contractors_contractors_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Frc Rfqs"
				],
				"operation": [
					"frc_rfqs_delete_frc_rfqs_rfqs_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Cargo Id",
		"name": "cargoId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Frc Rfqs"
				],
				"operation": [
					"frc_rfqs_delete_frc_rfqs_rfqs_id_cargo_cargoId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Frc Rfqs"
				],
				"operation": [
					"frc_rfqs_delete_frc_rfqs_rfqs_id_cargo_cargoId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Frc Rfqs"
				],
				"operation": [
					"frc_rfqs_get_frc_rfqs_rfqs_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Frc Rfqs"
				],
				"operation": [
					"frc_rfqs_get_frc_rfqs_rfqs_id_cargo"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Frc Rfqs"
				],
				"operation": [
					"frc_rfqs_post_frc_rfqs_rfqs_id_cargo"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Frc Rfqs"
				],
				"operation": [
					"frc_rfqs_put_frc_rfqs_rfqs_id"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Cargo Id",
		"name": "cargoId_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Frc Rfqs"
				],
				"operation": [
					"frc_rfqs_put_frc_rfqs_rfqs_id_cargo_cargoId"
				]
			}
		}
	},
	{
		"type": "string",
		"default": "",
		"displayName": "Id",
		"name": "id_string",
		"required": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Frc Rfqs"
				],
				"operation": [
					"frc_rfqs_put_frc_rfqs_rfqs_id_cargo_cargoId"
				]
			}
		}
	}
];

export default properties;
