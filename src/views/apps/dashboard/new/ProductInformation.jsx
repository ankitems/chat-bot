'use client'

// MUI Imports
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

// Third-party Imports
import classnames from 'classnames'
import { useEditor, EditorContent } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import { Underline } from '@tiptap/extension-underline'
import { Placeholder } from '@tiptap/extension-placeholder'
import { TextAlign } from '@tiptap/extension-text-align'

// Components Imports
import CustomIconButton from '@core/components/mui/IconButton'

// Style Imports
import '@/libs/styles/tiptapEditor.css'
import { Button } from '@mui/material'

const EditorToolbar = ({ editor }) => {
  if (!editor) {
    return null
  }

  return (
    <div className='flex flex-wrap gap-x-3 gap-y-1 pbs-5 pbe-4 pli-5'>
      <CustomIconButton
        {...(editor.isActive('bold') && { color: 'danger' })}
        variant='outlined'
        size='small'
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <i className={classnames('ri-bold', { 'text-textSecondary': !editor.isActive('bold') })} />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive('underline') && { color: 'primary' })}
        variant='outlined'
        size='small'
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <i className={classnames('ri-underline', { 'text-textSecondary': !editor.isActive('underline') })} />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive('italic') && { color: 'primary' })}
        variant='outlined'
        size='small'
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <i className={classnames('ri-italic', { 'text-textSecondary': !editor.isActive('italic') })} />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive('strike') && { color: 'primary' })}
        variant='outlined'
        size='small'
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <i className={classnames('ri-strikethrough', { 'text-textSecondary': !editor.isActive('strike') })} />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive({ textAlign: 'left' }) && { color: 'primary' })}
        variant='outlined'
        size='small'
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
      >
        <i className={classnames('ri-align-left', { 'text-textSecondary': !editor.isActive({ textAlign: 'left' }) })} />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive({ textAlign: 'center' }) && { color: 'primary' })}
        variant='outlined'
        size='small'
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
      >
        <i
          className={classnames('ri-align-center', { 'text-textSecondary': !editor.isActive({ textAlign: 'center' }) })}
        />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive({ textAlign: 'right' }) && { color: 'primary' })}
        variant='outlined'
        size='small'
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
      >
        <i
          className={classnames('ri-align-right', { 'text-textSecondary': !editor.isActive({ textAlign: 'right' }) })}
        />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive({ textAlign: 'justify' }) && { color: 'primary' })}
        variant='outlined'
        size='small'
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
      >
        <i
          className={classnames('ri-align-justify', {
            'text-textSecondary': !editor.isActive({ textAlign: 'justify' })
          })}
        />
      </CustomIconButton>
    </div>
  )
}

const ProductInformation = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Write something here...'
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph']
      }),
      Underline
    ],
    content: `
      <p>
        Keep your account secure with authentication step.
      </p>
    `
  })

  return (
    <div>
      <Typography variant='h4' className='mbe-1'>
        Add a new Chat-Bot
      </Typography>

      <Card>
        <CardHeader title='Chat-Bot Details' />
        <CardContent>
          <Grid container spacing={5} className='mbe-5'>
            <Grid item xs={12}>
              <TextField fullWidth label='Title' placeholder='My Chat-Bot' required='true' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Company Name' placeholder='Your Company Name' required='true' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Company Website' placeholder='https://www.yourcompany.com' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Goal' placeholder='Your Goal Here' required='true' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Greeting Message' placeholder='Type your message...' required='true' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='knowledgebase-label'>Knowledge Base*</InputLabel>
                <Select labelId='knowledgebase-label'>
                  <MenuItem value='yes' defaultChecked>
                    Yes
                  </MenuItem>
                  <MenuItem value='no'>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>Chat Transfer:</Typography>
              <RadioGroup row defaultValue='false'>
                <FormControlLabel value='false' control={<Radio />} label='No' />
                <FormControlLabel value='true' control={<Radio />} label='Yes' />
              </RadioGroup>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Real-Time Meeting' placeholder='Meeting Link/Info' />
            </Grid>
          </Grid>
          <Typography className='mbe-1'>Script(Optional)</Typography>
          <Card className='p-0 border shadow-none'>
            <CardContent className='p-0'>
              <EditorToolbar editor={editor} />
              <Divider className='mli-5' />
              <EditorContent editor={editor} className='bs-[135px] overflow-y-auto flex ' />
            </CardContent>
          </Card>
        </CardContent>
        <div className='flex justify-center mb-4'>
          <div className='flex gap-4'>
            <Button variant='outlined' color='secondary'>
              Discard
            </Button>
            <Button variant='contained'>Save</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default ProductInformation
