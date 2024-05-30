"use strict";(self.webpackChunksql_schema_visualizer=self.webpackChunksql_schema_visualizer||[]).push([[720],{4720:function(e,t,i){i.r(t),i.d(t,{default:function(){return a}});var a=[JSON.parse('{"name":"products","description":"All available products (available via subscriptions or one-time payments) users can buy.","schemaColor":"#91C4F2","columns":[{"name":"id","key":true,"description":"Unique identifier of a product.","type":"bigint"},{"name":"name","description":"Product\'s name.","type":"text"},{"name":"price","description":"Product\'s price in USD.","type":"numeric"},{"name":"trial_days","description":"T[he number of free trial days.","type":"integer"},{"name":"renewal_period","description":"Renewal period of a subscription product: 1 for monthly, 12 for yearly.","type":"integer"}]}'),JSON.parse('{"name":"purchases","description":"This table contains all purchase records.","schemaColor":"#91C4F2","columns":[{"name":"id","key":true,"description":"Unique identifier of a purchase.","type":"bigint"},{"name":"user_id","description":"ID of a user who made this purchase.","type":"bigint"},{"name":"product_id","description":"ID of a purchased product.","type":"bigint"},{"name":"trial_id","description":"ID of an associated trial for a subscription product.","type":"bigint"},{"name":"amount","description":"Amount paid in USD.","type":"numeric"},{"name":"created_at","description":"Timestamp of a purchase.","type":"timestamp"},{"name":"refunded_at","description":"Timestamp of a full refund in case a user asked for it.","type":"timestamp"}]}'),JSON.parse('{"name":"trials","description":"This table contains all started trials (trials are available only for subscription products).","schemaColor":"#91C4F2","columns":[{"name":"id","key":true,"description":"Unique identifier of a trial.","type":"bigint"},{"name":"user_id","description":"ID of a user who started a trial.","type":"bigint"},{"name":"product_id","description":"ID of a subscription product.","type":"bigint"},{"name":"started_at","description":"Timestamp when a user started a trial.","type":"timestamp"},{"name":"cancelled_at","description":"Timestamp when a user cancelled a trial.","type":"timestamp"},{"name":"finished_at","description":"Timestamp when a trial was finished and a purchase was made (user was automatically charged the product\'s price).","type":"timestamp"}]}'),JSON.parse('{"name":"users","description":"This table contains all user records (accounts).","schemaColor":"#91C4F2","columns":[{"name":"id","key":true,"description":"Unique identifier of a user.","type":"bigint"},{"name":"first_name","description":"User\'s first name.","type":"text"},{"name":"last_name","description":"User\'s last name.","type":"text"},{"name":"email","description":"User\'s email.","type":"text"},{"name":"country","description":"User\'s country (IP based).","type":"text"},{"name":"city","description":"User\'s city (IP based).","type":"text"},{"name":"age","description":"User\'s age.","type":"integer"},{"name":"timezone","description":"User\'s timezone. Don\'t forget that all timestamps are in UTC.","type":"text"},{"name":"utc_offset","description":"User\'s timezone offset from UTC.","type":"integer"},{"name":"created_at","description":"Timestamp when a user created an account.","type":"timestamp"}]}')]}}]);
//# sourceMappingURL=720.8e7cb7b1.chunk.js.map