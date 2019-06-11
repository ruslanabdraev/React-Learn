import d3 from 'd3'
import {Component} from 'react'

export default class Timeline extends Component{
    constructor({data=[]}){
        const times = d3.extent(data.map(d=>d.year))
        const range = [50, 450]
        super({data})
        this.state = {
            data, times, range
        }
    }

    componentDidMount(){
        let group
        const {data, times, range} = this.state
        const {target} = this.refs
        const scale = d3.time.scale().domain(times).range(range)

        d3.select(target)
            .append('svg')
            .attr('height', 200)
            .attr('width', 500)
        
    }
}