import _ from "lodash";

export const convertUsd = (originalByToken, priceData)=>{
    
    return _.fromPairs(
        _.keys(originalByToken).map(token=>[token, priceData[token+'usdt'] * originalByToken[token]])
    )
}

export const aggregate = (originalByToken, priceData)=>{
    return _.sum(
        _.values(
            convertUsd(originalByToken, priceData)
        )
    )
}