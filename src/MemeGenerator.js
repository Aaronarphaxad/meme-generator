import React, { Component } from "react"

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                this.setState({ allMemeImgs: memes })
            })
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit(event) {
        event.preventDefault();
        const memesArray = this.state.allMemeImgs
        const pickedMeme = memesArray[Math.floor(Math.random() * memesArray.length)]
        this.setState({ randomImg: pickedMeme.url })
    }


    render() {
        return (
            <div>
                <div class="mx-5 my-3">

                    <h2>Usage:</h2>
                    <p style={{ fontSize: "10px" }}>Enter your meme text and click the "Gen" button to generate random pictures.
                        Continue clicking until you see a picture you can use. Screenshot and enjoy :)</p>

                </div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input style={{ marginBottom: "10px", padding: "1px" }}
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    /><br />
                    <input style={{ marginBottom: "10px", padding: "1px" }}
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    /><br />

                    <button style={{ padding: "5px" }}>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator