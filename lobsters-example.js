// This is an example of how to use the Lobsters spec to deploy
// Lobsters to a single Amazon instance.

var lobsters = require("github.com/quilt/lobsters/lobsters")

var deployment = createDeployment();
// To use this example, change this to your RSA public key.
var sshPublicKey = "AAAAB3NzaC1yc2EAAAADAQABAAACAQDGnlAVFGvc8QoLDrkTE9zHkkCb3q8jkAl5hszihQ0J4ede06QYI2gXoqPmla9E5gCsL9x+RsJmSHJIEMcYddYP9caUtsH06MU3i0aQHvLeOs6Blb5r1Qnfl0U/ojxgIwP/bufLL/c06UTl4GEC+OzM+kNq8VgycZDx0GsWEY8jCJSrc1GP9ztTVvxtZqsXMz0LL6nGp+NiwDmRS2K/tCk9mDjiQdAZEQbSts1XMBG+8U0TEP+gXh6qbTX5ZQXfEH9P8zBzDW7OBbDzKc3wLXuobt3/bCJC/5m6cQpn2Ol8HVuDZyBDkGuAgOvP5dLOe05/trJymQ917QJWAOqSXb5dLeXJ4dqjKO0BQSC+RnnZyKEHxYsOeGGXZOhe7p/wx5Ac8jBwkVdZJlJ8ey6NAFt0R1SCI4Wwjpu7P0lpbs2I3hvfmblpHswRW5oZYfyhCxcwvAQ0SxlX8YUMcTDMv3yfoY/0ngeoAB9EWc/mgkxahmEQytVesDoYrV9deH9rsiTfmVL0q862/B+MYnNdVs1loJLnpAuCs7ta/F1kqLl2nduD6xuOYApQIkjva84UKs/WWKSEq0Sc5Yz/NVOtmF0M6VYLHW/PPnf/336VEIvBkXGqhJILYd+JsFgDHcE0F8odqBxeQ7Djb+0xKSaTU3jPPMrpXoiwcW++yZRLYM9gBQ==";
var baseMachine = new Machine({provider: "Amazon", sshKeys: ["ssh-rsa " + sshPublicKey]});

deployment.deploy(baseMachine.asMaster());
deployment.deploy(baseMachine.asWorker());

// Deploy lobsters with "mysqlRootPassword" as the SQL root password.
lobsters.Deploy(deployment, "mysqlRootPassword");


