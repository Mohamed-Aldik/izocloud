import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';

export default function ControlledTreeView() {
  const [expanded, setExpanded] = React.useState<string[]>([]);

  const handleToggle = (event: React.SyntheticEvent, nodeIds: string[]) => {
    setExpanded(nodeIds);
  };

  const handleExpandClick = () => {
    setExpanded((oldExpanded) =>
      oldExpanded.length === 0 ? ['1', '5', '7', '10','13'] : [],
    );
  };

  return (
    <Box sx={{ height: 270, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}>
      <Box sx={{ mb: 1 }}>
        <Button onClick={handleExpandClick}>
          {expanded.length === 0 ? 'Expand all' : 'Collapse all'}
        </Button>
      </Box>
      <TreeView
        aria-label="controlled"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        expanded={expanded}
        onNodeToggle={handleToggle}
        multiSelect
      >
        <TreeItem nodeId="1" label="Category 1">
          <TreeItem nodeId="2" label="Calendar" />
          <TreeItem nodeId="3" label="Chrome" />
          <TreeItem nodeId="4" label="Webstorm" />
        </TreeItem>
        <TreeItem nodeId="5" label="Category 2">
          <TreeItem nodeId="6" label="MUI">
          </TreeItem>
        </TreeItem>
        <TreeItem nodeId="7" label="Category 3">
          <TreeItem nodeId="8" label="MUI">
          </TreeItem>
          <TreeItem nodeId="9" label="MUI">
          </TreeItem>
        </TreeItem>
        <TreeItem nodeId="10" label="Category 3">
          <TreeItem nodeId="11" label="MUI">
          </TreeItem>
          <TreeItem nodeId="12" label="MUI">
          </TreeItem>
        </TreeItem>
        <TreeItem nodeId="13" label="Category 3">
          <TreeItem nodeId="14" label="MUI">
          </TreeItem>
          <TreeItem nodeId="15" label="MUI">
          </TreeItem>
        </TreeItem>
      </TreeView>
    </Box>
  );
}
