import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Map from '../components/Map'
storiesOf('Map', module)
.add('Map as a template', () => (
    '<Map/>'
)
.add('Map as a component', () =>({
    components: {'map': Map},
    template: '<Map/>'
})));