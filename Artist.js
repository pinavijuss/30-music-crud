class Artist {
    constructor() {
        this.playList = [];
        this.price = 0;
        this.profit = 0;
    }
    intro() {
        console.log('Hi, my name is Raimonda and I am a musician!')
    }

    songPrice(price) {
        this.price = price / 100;
        console.log(`Raimonda's price per song is ${this.price} EUR;`)
    }

    addSong(songName) {
        this.playList.push({
            songName: songName,
            repeats: 0,

        })

    }

    playlist() {

        console.log(`Raimonda's playlist:`);
        console.log('====================');
        for (let i = 0; i < this.playList.length; i++) {
            const element = this.playList[i];
            console.log(`${i + 1}. ${element.songName} (${element.repeats})`);
        }
    }

    playSong(trackNumber) {
        const songName = this.playList[trackNumber].songName;
        for (let i = 0; i < this.playList.length; i++) {
            const element = this.playList[i];
            if (i === trackNumber) {
                element.repeats++;
                this.profit += this.price
            }

        }
        console.log(`Playing song: ${songName}`)
    }

    fortune() {

        // let profit = 0;
        // for (let i = 0; i < this.playList.length; i++) {
        //     const songPlayed = this.playList[i].repeats;
        //     profit += songPlayed * this.price;


        console.log(`Total lifetime wealth of Raimonda is ${this.profit} right now!`);
    }




}


module.exports = Artist;