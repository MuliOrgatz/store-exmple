import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'

import {selectDirectorySections} from '../../redux/directory/directory.selectors'

import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.components';

const Directory = ({sections}) => (
    <div className='directory-menu'>
    {
        sections.map(({id, ...otherSectionProp}) => (
            <MenuItem key= {id} {...otherSectionProp}/>
        ))
    }
    </div>   
)

const mapStateToProps = createStructuredSelector({
    sections:selectDirectorySections
})

export default connect(mapStateToProps)(Directory);