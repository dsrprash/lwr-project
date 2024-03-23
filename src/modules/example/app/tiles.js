
const tiles = [];

const getTiles = () => {
    prepareTiles();
    return tiles;
}


const prepareTiles = () => {
    let sfdc_mydev = { 
        tileName: 'sfdc_mydev',
        orgName: "My Developer Org", 
        orgUrl: 'https://prash-cpq-dev-ed.lightning.force.com/',
        tileIcon: '/public/assets/favicon.ico',
        tileType: 'SFDC'
    }
    tiles.push(sfdc_mydev);

    let gmail = { 
        tileName: 'gmail',
        orgName: "Gmail", 
        orgUrl: 'https://mail.google.com/',
        tileIcon: '/public/assets/favicon.ico',
        tileType: 'Mail'
    }
    tiles.push(gmail);

}
export { getTiles}