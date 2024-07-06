import type { Meta, StoryObj } from "@storybook/react"
import TextLink from "./"
import { FaAngleDown } from "react-icons/fa6"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/TextLink",
  component: TextLink,
  decorators: [
    (Story) => (
      <div className="p-20">
        <Story />
      </div>
    ),
  ],
  args: {
    url: "#",
    label: "Link",
    className: "",
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    icon: { control: false },
  },
} satisfies Meta<typeof TextLink>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => {
    return <TextLink {...args} />
  },
}

export const TextLinkWithIcon: Story = {
  render: (args) => {
    return <TextLink icon={<FaAngleDown />} {...args} />
  },
}
