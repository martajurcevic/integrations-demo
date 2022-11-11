import { React, useState, useEffect } from 'react';
import integrationService from '../../services/integrationService';
import MoreIcon from '@rsuite/icons/legacy/More';
import { Dropdown } from "rsuite";

import { Table, Badge, IconButton, Popover, Whisper } from 'rsuite';


import Tags from '../../components/tags/Tags';

const { Cell, Column, HeaderCell } = Table;




const FirstCell = ({ rowData, ...rest }) => {
    return (
        <Cell rowData={rowData} {...rest}>
            <div>{rowData.title} &nbsp; <Badge content={rowData.statusName} color={rowData.statusName == "Disabled" ? "red" : "green"} ></Badge></div>
            <div>Category: {rowData.category}</div>

        </Cell>
    );
};

const SecondCell = ({ rowData, ...rest }) => {
    return (
        <Cell rowData={rowData} {...rest}>
            <br />
            <Tags tags={rowData.tags} />
            {/* <div>
                <TagGroup>
                    <Tag closable>{rowData.tags}</Tag>
                    <IconButton
                        className="tag-add-btn"
                        icon={<PlusIcon />}
                        appearance="ghost"
                        size="xs"
                    />
                </TagGroup>
            </div> */}
        </Cell>
    );
};

const renderMenu = ({ onClose, left, top, className }, ref) => {
    const handleSelect = eventKey => {
        onClose();
        console.log(eventKey);
    };
    return (
        <Popover ref={ref} className={className} style={{ left, top }} full>
            <Dropdown.Menu onSelect={handleSelect}>
                <Dropdown.Item eventKey={1}>Edit</Dropdown.Item>
                <Dropdown.Item eventKey={2}>Enable</Dropdown.Item>
                <Dropdown.Item eventKey={3}>Duplicate</Dropdown.Item>
                <Dropdown.Item eventKey={4}>New Workflow</Dropdown.Item>
                <Dropdown.Item eventKey={5}>Delete</Dropdown.Item>
            </Dropdown.Menu>
        </Popover>
    );
};

const ThirdCell = ({ rowData, ...rest }) => {
    return (
        <Cell rowData={rowData} {...rest}>
            <div>
                <Whisper placement="autoVerticalStart" trigger="click" speaker={renderMenu}>
                    <IconButton appearance="subtle" icon={<MoreIcon />} />
                </Whisper>
            </div>
            <div>Last modified {rowData.lastModified}</div>

        </Cell>
    );
};


const Categories = () => {
    const [integrations, setIntegrations] = useState();

    useEffect(() => {
        const getData = async () => {
            var result = await integrationService.getIntegrations();

            if (result.status == 200) {
                setIntegrations(result.data);
            }
        };

        getData();
    }, []);

    return (
        <>
            <h3>All categories</h3>
            {
                integrations &&
                <Table data={integrations} id="table" showHeader={false} rowHeight={70}>
                    <Column width={200}>
                        <HeaderCell>first column</HeaderCell>
                        <FirstCell />
                    </Column>
                    <Column width={400}>
                        <HeaderCell>second column</HeaderCell>
                        <SecondCell />
                    </Column>
                    <Column width={200}>
                        <HeaderCell>third column</HeaderCell>
                        <ThirdCell />
                    </Column>


                </Table>
            }
        </>
    );
}

export default Categories;

