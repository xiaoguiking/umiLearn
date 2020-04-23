import React from "react";
// import "antd/dist/antd.css";
import { TreeSelect } from "antd";

const treeData = [
    {
        title: "0",
        value: "0-0",
        key: "0-0",
        children: [
            {
                title: "1",
                title1: "0-1",
                value: "0-0-1",
                key: "0-0-1",
                children: [
                    {
                        title: "1-1",
                        title1: "0-1",
                        value: "0-0-1-1",
                        key: "0-0-1-1",
                    }

                ]
            },
            {
                title: "2",
                value: "0-0-2",
                key: "0-0-2"
            }
        ]
    },
    {
        title: "3",
        value: "0-1",
        key: "0-1"
    }
];

const valueMap = {};
function loops(list, parent) {
    return (list || []).map(({ children, value }) => {
        const node = (valueMap[value] = {
            parent,
            value
        });
        node.children = loops(children, node);
        return node;
    });
}

loops(treeData);

// function getPath(value) {
//     const path = [];
//     let current = valueMap[value];
//     while (current) {
//         path.unshift(current.value);
//         current = current.parent;
//     }
//     return path;
// }

export default class User extends React.Component {
    state = {
        value: undefined,
        showTitle: "title"
    };

    onChange = value => {
        // console.log("Change", getPath(value));
        this.setState({ value });
    };

    onSelect = value => {
        // console.log("Select:", getPath(value));
        this.setState({ showTitle: "title1" });
    };

    render() {
        return (
            <TreeSelect
                style={{ width: 300 }}
                value={this.state.value}
                dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                treeData={treeData}
                treeNodeLabelProp={this.state.showTitle}
                placeholder="Please select"
                treeDefaultExpandAll
                onChange={this.onChange}
                onSelect={this.onSelect}
            />
        );
    }
}




