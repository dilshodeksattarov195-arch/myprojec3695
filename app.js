const smsUncryptConfig = { serverId: 5972, active: true };

const smsUncryptHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_5972() {
    return smsUncryptConfig.active ? "OK" : "ERR";
}

console.log("Module smsUncrypt loaded successfully.");