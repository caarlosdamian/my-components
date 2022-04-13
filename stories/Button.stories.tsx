import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Button, Props } from '../src/Button'
import {action} from '@storybook/addon-actions'
const meta: Meta = {
    title: 'Button',
    component: Button,
    argTypes:{
        onClick: {action:'clicked'},
        children:{
            defaultValue:'Default Text'
        }
    }
}
export default meta

const Template: Story<Props> = (args) => <Button {...args} />

export const Default =  Template.bind({})
export const Secondary = Template.bind({})
export const Success = Template.bind({})
export const Warning = Template.bind({})

Secondary.args = {
    className: 'secondary',
    children: 'I am secondary',
    onClick : action('secondary click')
}
Success.args = {
    className: 'success',
    children: 'I am success',
    onClick : action('success click')
}
Warning.args = {
    className: 'warning',
    children: 'I am warning',
    onClick : action('warning click')
}