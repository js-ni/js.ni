import React from 'react'
import GithubOrg from './GithubOrg'
import {OrganizationMembers} from './view'

/**
 * Displays a list of public members of a Github organization.
 * This class handle the backend retrieval of the members list.
 *
 * Props required:
 * - orgName: Name of the organization whose members are to be displayed
 */
export default class OrgMembersDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {members: [], pending: true, error: false}

        // Load the organization members
        this.org = new GithubOrg(this.props.orgName)
        this.org.publicMembers().then(members => {
            this.setState({members, pending: false})

        })
        .catch(error => {
            console.error(error)
            this.setState({error: true})
        })
    }

    componentWillMount = () => {

    }

    render = () => {
        return (
            <OrganizationMembers members={this.state.members} />
        )
    }
}
