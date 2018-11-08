////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Monster Loot Demo Cloud Script
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Takes a string "tableId" which is the table to roll from
// Takes a string "playerId" which is the player to grant the reward to
var RollTable = function ReadTableData(args, context) {
    try {
        // First, roll a random number and evaluate the drop table
        var result = server.EvaluateRandomResultTable({ TableId : tableId });

        // Second, take the result and grant it to the player
        server.GrantItemsToUser({
            PlayFabId : playerId,
            ItemIds : [result.ResultItemId]
        });

        // Finally, return the resultId back to the client
        return result.ResultItemId;
    } catch(error) {
        log.error(JSON.stringify(error));
    }
};
handlers["rollTable"] = RollTable;